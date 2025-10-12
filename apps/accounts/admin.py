from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.utils.translation import gettext_lazy as _
from .models import User

@admin.register(User)
class UserAdmin(BaseUserAdmin):
    """Custom admin for User model"""

    # Fields to display in user list
    list_display = ['email', 'first_name', 'last_name', 'role', 'email_verified', 'is_active', 'created_at']

    # Filters on the right sidebar
    list_filter = ['role', 'email_verified', 'is_staff', 'is_superuser', 'is_active', 'created_at']

    # Search functionality
    search_fields = ['email', 'first_name', 'last_name', 'phone']

    # Default ordering (newest first)
    ordering = ['-created_at']

    # Fields layout when editing a user
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        (_('Personal Info'), {'fields': ('first_name', 'last_name', 'phone', 'bio', 'avatar')}),
        (_('Role & Verification'), {'fields': ('role', 'email_verified')}),
        (_('Permissions'), {
            'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions'),
        }),
        (_('Important dates'), {'fields': ('last_login', 'created_at', 'updated_at')}),
    )

    # Fields layout when adding a new user
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2', 'role'),
        }),
    )

    # Read-only fields (can't be edited)
    readonly_fields = ['created_at', 'updated_at', 'last_login']