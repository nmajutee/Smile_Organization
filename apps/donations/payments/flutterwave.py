import requests
from django.conf import settings


class FlutterwavePayment:
    """Flutterwave payment integration"""

    BASE_URL = "https://api.flutterwave.com/v3"

    def __init__(self):
        self.secret_key = getattr(settings, 'FLUTTERWAVE_SECRET_KEY', '')
        self.public_key = getattr(settings, 'FLUTTERWAVE_PUBLIC_KEY', '')

    def initiate_payment(self, donation):
        """Initiate payment with Flutterwave"""

        url = f"{self.BASE_URL}/payments"

        payload = {
            "tx_ref": donation.payment_reference,
            "amount": str(donation.amount),
            "currency": donation.currency,
            "redirect_url": f"{settings.FRONTEND_URL}/payment/callback",
            "customer": {
                "email": donation.donor_email,
                "name": donation.donor_name,
            },
            "customizations": {
                "title": "Smile Organization Donation",
                "description": f"Donation for {donation.project.title if donation.project else 'General Fund'}",
            }
        }

        headers = {
            "Authorization": f"Bearer {self.secret_key}",
            "Content-Type": "application/json"
        }

        try:
            response = requests.post(url, json=payload, headers=headers)
            data = response.json()

            if data.get('status') == 'success':
                return {
                    'success': True,
                    'payment_link': data['data']['link'],
                    'reference': donation.payment_reference
                }
            return {'success': False, 'error': data.get('message', 'Unknown error')}
        except Exception as e:
            return {'success': False, 'error': str(e)}

    def verify_payment(self, transaction_id):
        """Verify payment status"""

        url = f"{self.BASE_URL}/transactions/{transaction_id}/verify"

        headers = {
            "Authorization": f"Bearer {self.secret_key}",
        }

        try:
            response = requests.get(url, headers=headers)
            data = response.json()

            if data.get('status') == 'success':
                return {
                    'success': True,
                    'status': data['data']['status'],
                    'amount': data['data']['amount'],
                    'transaction_id': data['data']['id']
                }
            return {'success': False}
        except Exception as e:
            return {'success': False, 'error': str(e)}