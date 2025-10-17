# Replace the entire file with this:

from rest_framework import generics, permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.utils import timezone
from .models import Donation
from .serializers import DonationSerializer, DonationCreateSerializer, DonationListSerializer
from apps.projects.models import Project
from .payments.flutterwave import FlutterwavePayment
import uuid


class DonationListView(generics.ListAPIView):
    """List all donations"""
    queryset = Donation.objects.filter(status='successful')
    serializer_class = DonationListSerializer
    permission_classes = [permissions.AllowAny]


class DonationCreateView(generics.CreateAPIView):
    """Initiate a donation"""
    serializer_class = DonationCreateSerializer
    permission_classes = [permissions.AllowAny]

    def perform_create(self, serializer):
        # generate payment reference
        payment_ref = f"DON-{uuid.uuid4().hex[:12].upper()}"

        donation = serializer.save(
            payment_reference=payment_ref,
            donor=self.request.user if self.request.user.is_authenticated else None
        )

        return donation

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        donation = self.perform_create(serializer)

        # integrate with flutterwave
        if donation.payment_method == 'flutterwave':
            flutterwave = FlutterwavePayment()
            payment_result = flutterwave.initiate_payment(donation)

            if payment_result.get('success'):
                return Response({
                    'message': 'Donation initiated',
                    'donation_id': donation.id,
                    'payment_reference': donation.payment_reference,
                    'amount': str(donation.amount),
                    'currency': donation.currency,
                    'payment_link': payment_result['payment_link']
                }, status=status.HTTP_201_CREATED)
            else:
                donation.status = 'failed'
                donation.save()
                return Response({
                    'error': 'Payment initiation failed',
                    'details': payment_result.get('error')
                }, status=status.HTTP_400_BAD_REQUEST)

        # fallback for other payment methods
        return Response({
            'message': 'Donation initiated',
            'donation_id': donation.id,
            'payment_reference': donation.payment_reference,
            'amount': str(donation.amount),
            'currency': donation.currency,
            'payment_link': f'https://payment.example.com/pay/{donation.payment_reference}'
        }, status=status.HTTP_201_CREATED)


class DonationDetailView(generics.RetrieveAPIView):
    """Get donation details"""
    queryset = Donation.objects.all()
    serializer_class = DonationSerializer
    permission_classes = [permissions.AllowAny]


class MyDonationsView(generics.ListAPIView):
    """Get user's donations"""
    serializer_class = DonationListSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Donation.objects.filter(donor=self.request.user)


class PaymentWebhookView(APIView):
    """Handle payment webhooks from payment providers"""
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        # TODO: verify webhook signature

        payment_ref = request.data.get('tx_ref')
        status_from_provider = request.data.get('status')
        transaction_id = request.data.get('transaction_id')

        try:
            donation = Donation.objects.get(payment_reference=payment_ref)

            if status_from_provider == 'successful':
                donation.status = 'successful'
                donation.paid_at = timezone.now()
                donation.transaction_id = transaction_id
                donation.save()

                # update project donation amount
                if donation.project:
                    project = donation.project
                    project.donation_raised += donation.amount
                    project.save()

                return Response({'message': 'Payment confirmed'})
            else:
                donation.status = 'failed'
                donation.save()
                return Response({'message': 'Payment failed'}, status=status.HTTP_400_BAD_REQUEST)

        except Donation.DoesNotExist:
            return Response({'error': 'Donation not found'}, status=status.HTTP_404_NOT_FOUND)