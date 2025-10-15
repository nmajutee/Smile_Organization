from django.contrib import admin
from .models import Donation


@admin.register(Donation)
class DonationAdmin(admin.ModelAdmin):
    list_display = ['donor_name', 'donor_email', 'amount', 'currency',
                    'payment_method', 'status', 'project', 'created_at']
    list_filter = ['status', 'payment_method', 'currency', 'is_anonymous', 'created_at']
    search_fields = ['donor_name', 'donor_email', 'transaction_id', 'payment_reference']
    readonly_fields = ['transaction_id', 'payment_reference', 'created_at', 'paid_at']
    ordering = ['-created_at']