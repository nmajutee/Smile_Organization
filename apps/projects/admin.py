from django.contrib import admin
from .models import Project, VolunteerApplication


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ['title', 'location', 'status', 'start_date', 'end_date', 'created_by', 'created_at']
    list_filter = ['status', 'start_date', 'location']
    search_fields = ['title', 'description', 'location']
    ordering = ['-created_at']


@admin.register(VolunteerApplication)
class VolunteerApplicationAdmin(admin.ModelAdmin):
    list_display = ['volunteer', 'project', 'status', 'applied_at']
    list_filter = ['status', 'applied_at']
    search_fields = ['volunteer__email', 'project__title']
    ordering = ['-applied_at']