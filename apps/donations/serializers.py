from rest_framework import serializers
from .models import Donation
from apps.projects.serializers import ProjectListSerializer


class DonationSerializer(serializers.ModelSerializer):
    """Serializer for donations"""
    project_title = serializers.CharField(source='project.title', read_only=True)
    donor_name_display = serializers.SerializerMethodField()

    class Meta:
        model = Donation
        fields = '__all__'
        read_only_fields = ['donor', 'transaction_id', 'status', 'paid_at', 'created_at']

    def get_donor_name_display(self, obj):
        # hide name if anonymous
        if obj.is_anonymous:
            return "Anonymous"
        return obj.donor_name


class DonationCreateSerializer(serializers.ModelSerializer):
    """Serializer for creating donations"""

    class Meta:
        model = Donation
        fields = ['project', 'amount', 'currency', 'payment_method',
                  'donor_email', 'donor_name', 'message', 'is_anonymous']

    def validate_amount(self, value):
        if value <= 0:
            raise serializers.ValidationError("Amount must be greater than 0")
        return value


class DonationListSerializer(serializers.ModelSerializer):
    """Simplified serializer for donation lists"""
    project_title = serializers.CharField(source='project.title', read_only=True)

    class Meta:
        model = Donation
        fields = ['id', 'donor_name', 'amount', 'currency', 'status',
                  'payment_method', 'project_title', 'is_anonymous', 'created_at']