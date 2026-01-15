from rest_framework import serializers
from .models import Project, VolunteerApplication
from apps.accounts.serializers import UserSerializer


class ProjectSerializer(serializers.ModelSerializer):
    """Serializer for Project model"""
    created_by = UserSerializer(read_only=True)

    class Meta:
        model = Project
        fields = '__all__'
        read_only_fields = ['created_by', 'donation_raised', 'created_at', 'updated_at']


class ProjectListSerializer(serializers.ModelSerializer):
    """Simplified serializer for project list"""
    created_by_email = serializers.EmailField(source='created_by.email', read_only=True)

    class Meta:
        model = Project
        fields = ['id', 'title', 'description', 'location', 'start_date', 'end_date', 'status',
                  'volunteer_needed', 'donation_goal', 'donation_raised',
                  'image', 'created_by_email', 'created_at']


class VolunteerApplicationSerializer(serializers.ModelSerializer):
    """Serializer for volunteer applications"""
    volunteer = UserSerializer(read_only=True)
    project_title = serializers.CharField(source='project.title', read_only=True)

    class Meta:
        model = VolunteerApplication
        fields = '__all__'
        read_only_fields = ['volunteer', 'applied_at', 'reviewed_at', 'status']


class ApplicationStatusSerializer(serializers.Serializer):
    """Serializer for updating application status"""
    status = serializers.ChoiceField(choices=['approved', 'rejected'])