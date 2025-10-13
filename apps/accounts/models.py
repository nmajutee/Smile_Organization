from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.db import models


class UserManager(BaseUserManager):
    """Manager for User model with email login"""

    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('Email required')
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
    """Custom user with email login and role-based access"""

    ROLE_CHOICES = [
        ('volunteer', 'Volunteer'),
        ('donor', 'Donor'),
        ('staff', 'Staff Member'),
        ('admin', 'Administrator'),
    ]

    username = None  # disable username
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=20, blank=True, null=True)

    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='volunteer')

    # profile fields
    bio = models.TextField(blank=True, null=True)
    avatar = models.ImageField(upload_to='avatars/', blank=True, null=True)
    email_verified = models.BooleanField(default=False)

    # timestamps
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = UserManager()

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.email

    def get_full_name(self):
        if self.first_name and self.last_name:
            return f"{self.first_name} {self.last_name}"
        return self.email

    def is_volunteer(self):
        return self.role == 'volunteer'

    def is_donor(self):
        return self.role == 'donor'