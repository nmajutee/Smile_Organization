from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.db import models
from django.utils.translation import gettext_lazy as _


class UserManager(BaseUserManager):
    """Custom manager for email-based authentication"""

    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('Email is required')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active', True)
        extra_fields.setdefault('role', 'admin')

        if not extra_fields.get('is_staff'):
            raise ValueError('Superuser must have is_staff=True')
        if not extra_fields.get('is_superuser'):
            raise ValueError('Superuser must have is_superuser=True')

        return self.create_user(email, password, **extra_fields)


class User(AbstractUser):
    """
    Custom User model with email login and role-based access.
    Regular users can be: volunteer, donor, or staff.
    Admin role is restricted and can only be set by superusers.
    """

    # Public roles (users can choose these during registration)
    PUBLIC_ROLE_CHOICES = [
        ('volunteer', 'Volunteer'),
        ('donor', 'Donor'),
        ('staff', 'Staff Member'),
    ]

    # All roles (internal use - includes admin)
    ROLE_CHOICES = PUBLIC_ROLE_CHOICES + [
        ('admin', 'Administrator'),
    ]

    # Core fields
    username = None  # Remove username field
    email = models.EmailField(_('email address'), unique=True)
    phone = models.CharField(max_length=20, blank=True, null=True, unique=True)
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='volunteer')

    # Optional profile fields
    bio = models.TextField(blank=True)
    avatar = models.ImageField(upload_to='avatars/', blank=True, null=True)
    email_verified = models.BooleanField(default=False)

    # Timestamps
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    # Configuration
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []
    objects = UserManager()

    class Meta:
        ordering = ['-created_at']
        verbose_name = 'user'
        verbose_name_plural = 'users'

    def __str__(self):
        return self.email

    def get_full_name(self):
        """Return full name or email"""
        full_name = f"{self.first_name} {self.last_name}".strip()
        return full_name or self.email

    # Role check helpers
    def is_volunteer(self):
        return self.role == 'volunteer'

    def is_donor(self):
        return self.role == 'donor'

    def is_ngo_staff(self):
        return self.role == 'staff'

    def is_admin_role(self):
        return self.role == 'admin'