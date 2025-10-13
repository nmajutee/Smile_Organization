# i found this on youtube - trying to make custom user model work
from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.db import models

# TODO: figure out why username is still required even though i want email login
# tried copying from stack overflow but not sure if this is right

class UserManager(BaseUserManager):
    # this is supposed to create users with email instead of username
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('need email')  # TODO: better error message?
        email = self.normalize_email(email)  # dont know what normalize does but tutorial said to use it
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        # copied from documentation - seems to work
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active', True)
        extra_fields.setdefault('role', 'admin')  # BUG: what if role not set?
        
        # not sure if i need these checks but tutorial had them
        if not extra_fields.get('is_staff'):
            raise ValueError('Superuser must have is_staff=True')
        if not extra_fields.get('is_superuser'):
            raise ValueError('Superuser must have is_superuser=True')
            
        return self.create_user(email, password, **extra_fields)


class User(AbstractUser):
    # trying to make different user types - volunteer, donor, staff, admin
    # not sure if this is the best way but lets try
    
    ROLE_CHOICES = [
        ('volunteer', 'Volunteer'),
        ('donor', 'Donor'),
        ('staff', 'Staff Member'),
        ('admin', 'Administrator'),  # maybe shouldnt let users pick this?
    ]

    # Core fields
    username = None  # Remove username field
    email = models.EmailField(_('email address'), unique=True)
    phone = models.CharField(max_length=20, blank=True, null=True, unique=True)
    
    username = None  # trying to disable username field - hope this works
    email = models.EmailField(unique=True)  # make email the login field
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='volunteer')
    
    # extra stuff for profile
    bio = models.TextField(blank=True, null=True)  # TODO: maybe add max_length?
    avatar = models.ImageField(upload_to='avatars/', blank=True, null=True)
    phone = models.CharField(max_length=20, blank=True, null=True)  # forgot to validate phone format
    email_verified = models.BooleanField(default=False)  # for email verification later
    
    # timestamps - auto_now_add means it sets once, auto_now updates every save
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    # this makes email the login field instead of username
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []  # empty because email is already required
    
    objects = UserManager()  # use custom manager from above
    
    class Meta:
        ordering = ['-created_at']  # newest first
    
    def __str__(self):
        return self.email  # show email in admin
    
    # helper methods - not sure if i need all these
    def get_full_name(self):
        if self.first_name and self.last_name:
            return f"{self.first_name} {self.last_name}"
        return self.email  # fallback
    
    # check if user is specific role
    def is_volunteer(self):
        return self.role == 'volunteer'
    
    def is_donor(self):
        return self.role == 'donor'