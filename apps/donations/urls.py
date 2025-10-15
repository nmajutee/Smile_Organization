from django.urls import path
from . import views

urlpatterns = [
    path('', views.DonationListView.as_view(), name='donation-list'),
    path('create/', views.DonationCreateView.as_view(), name='donation-create'),
    path('<int:pk>/', views.DonationDetailView.as_view(), name='donation-detail'),
    path('my-donations/', views.MyDonationsView.as_view(), name='my-donations'),
    path('webhook/', views.PaymentWebhookView.as_view(), name='payment-webhook'),
]