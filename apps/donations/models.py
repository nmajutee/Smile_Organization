from django.db import models
from django.conf import settings
from apps.projects.models import Project


class Donation(models.Model):
    """Model for donations"""

    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('successful', 'Successful'),
        ('failed', 'Failed'),
        ('cancelled', 'Cancelled'),
    ]

    PAYMENT_METHOD_CHOICES = [
        ('flutterwave', 'Flutterwave'),
        ('paypal', 'PayPal'),
        ('mobile_money', 'Mobile Money'),
        ('orange_money', 'Orange Money'),
        ('crypto', 'Cryptocurrency'),
    ]

    # donor info
    donor = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL,
                              null=True, blank=True, related_name='donations')
    donor_email = models.EmailField()
    donor_name = models.CharField(max_length=200)

    # donation details
    project = models.ForeignKey(Project, on_delete=models.CASCADE,
                                related_name='donations', null=True, blank=True)
    amount = models.DecimalField(max_digits=12, decimal_places=2)
    currency = models.CharField(max_length=3, default='XAF')

    # payment info
    payment_method = models.CharField(max_length=50, choices=PAYMENT_METHOD_CHOICES)
    transaction_id = models.CharField(max_length=200, unique=True, blank=True, null=True)
    payment_reference = models.CharField(max_length=200, blank=True)

    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')

    # metadata
    message = models.TextField(blank=True)
    is_anonymous = models.BooleanField(default=False)

    # timestamps
    created_at = models.DateTimeField(auto_now_add=True)
    paid_at = models.DateTimeField(null=True, blank=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.donor_email} - {self.amount} XAF - {self.status}"