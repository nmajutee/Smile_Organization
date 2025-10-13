# django settings file - copied from startproject command
# trying to figure out what all these settings do

from pathlib import Path
import os

# trying to use .env file but not sure if its working
try:
    from decouple import config
except:
    # if decouple not installed just use regular os.environ
    config = os.environ.get

BASE_DIR = Path(__file__).resolve().parent.parent

# TODO: change this secret key before deploying!!!
SECRET_KEY = config('SECRET_KEY', 'django-insecure-please-change-this-123456789')

DEBUG = True  # remember to turn off in production

ALLOWED_HOSTS = ['*']  # TODO: fix this security issue later


# apps i need for the project
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    
    # stuff i installed from pip
    'rest_framework',
    'corsheaders',  # for vue.js frontend
    
    # my apps
    'apps.accounts',
    'apps.projects',
    'apps.donations',
    'apps.blog',
    'apps.calendar_app',
    'apps.core',
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',  # put this first i think
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'smile_backend.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'smile_backend.wsgi.application'

# database - using sqlite for now because postgresql is complicated
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',  # just creates a file
    }
}
# TODO: switch to postgresql when deploying

# CUSTOM USER MODEL

AUTH_USER_MODEL = 'accounts.User'


# Password validation
# https://docs.djangoproject.com/en/5.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
]

# dont know what these do but they were in the default settings
LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'UTC'
USE_I18N = True
USE_TZ = True

# static files (css, js, images)
STATIC_URL = '/static/'
STATIC_ROOT = BASE_DIR / 'staticfiles'

# media files (user uploads)
MEDIA_URL = '/media/'
MEDIA_ROOT = BASE_DIR / 'media'

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

# tell django to use my custom user model
AUTH_USER_MODEL = 'accounts.User'

# rest framework settings - copied from docs
REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.AllowAny',  # TODO: change this!!! very insecure
    ],
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination',
    'PAGE_SIZE': 10,  # show 10 items per page
}

# cors - allow all origins for now (fix later)
CORS_ALLOW_ALL_ORIGINS = True  # BUG: this is bad for production
CORS_ALLOW_CREDENTIALS = True