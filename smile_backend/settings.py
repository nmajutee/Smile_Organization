from pathlib import Path
import os

try:
    from decouple import config
except Exception:
    # fallback to os.environ.get if python-decouple is not installed
    def config(key, default=None):
        return os.environ.get(key, default)

BASE_DIR = Path(__file__).resolve().parent.parent

# Security / environment
SECRET_KEY = config('SECRET_KEY', 'django-insecure-please-change-this-123456789')

# DEBUG can be set in the environment. Accept common truthy strings.
DEBUG = config('DEBUG', 'True')
if isinstance(DEBUG, str):
    DEBUG = DEBUG.lower() in ('1', 'true', 'yes')

# Hosts allowed to serve the app. In production set ALLOWED_HOSTS env var (comma separated).
raw_allowed = config('ALLOWED_HOSTS', '')
if raw_allowed:
    ALLOWED_HOSTS = [h.strip() for h in raw_allowed.split(',') if h.strip()]
else:
    ALLOWED_HOSTS = ['*'] if DEBUG else []


INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    # third party
    'rest_framework',
    'corsheaders',

    # local apps
    'apps.accounts',
    'apps.projects',
    'apps.donations',
    'apps.blog',
    'apps.calendar_app',
    'apps.core',
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    # WhiteNoise serves static files in production without needing nginx.
    'whitenoise.middleware.WhiteNoiseMiddleware',
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

# DATABASE: use DATABASE_URL in production (Postgres) and fall back to sqlite for local dev
DATABASES = {}
_DATABASE_URL = config('DATABASE_URL', '')
if _DATABASE_URL:
    try:
        import dj_database_url

        DATABASES['default'] = dj_database_url.parse(
            _DATABASE_URL,
            conn_max_age=int(config('DB_CONN_MAX_AGE', 600)),
        )
    except Exception:
        # if dj-database-url is not installed or parsing fails, fall back to sqlite
        DATABASES['default'] = {
            'ENGINE': 'django.db.backends.sqlite3',
            'NAME': BASE_DIR / 'db.sqlite3',
        }
else:
    DATABASES['default'] = {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }

# CUSTOM USER MODEL

AUTH_USER_MODEL = 'accounts.User'


AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
]

LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'UTC'
USE_I18N = True
USE_TZ = True

# static files
STATIC_URL = '/static/'
STATIC_ROOT = BASE_DIR / 'staticfiles'

# Use WhiteNoise's compressed manifest storage in production for better caching.
STATICFILES_STORAGE = config('STATICFILES_STORAGE', 'whitenoise.storage.CompressedManifestStaticFilesStorage')

# media files
MEDIA_URL = '/media/'
MEDIA_ROOT = BASE_DIR / 'media'

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

AUTH_USER_MODEL = 'accounts.User'

# rest framework
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ],
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.IsAuthenticated',
    ],
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination',
    'PAGE_SIZE': 10,
}

# CORS settings for allowing frontend to access backend
CORS_ALLOW_ALL_ORIGINS = True  # TODO: restrict origins
CORS_ALLOW_CREDENTIALS = True

# JWT for authentication - using simplejwt
from datetime import timedelta

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ],
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.IsAuthenticated',
    ],
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination',
    'PAGE_SIZE': 10,
}

SIMPLE_JWT = {
    'ACCESS_TOKEN_LIFETIME': timedelta(hours=int(config('JWT_ACCESS_HOURS', 5))),
    'REFRESH_TOKEN_LIFETIME': timedelta(days=int(config('JWT_REFRESH_DAYS', 1))),
}

# Payment settings
FLUTTERWAVE_SECRET_KEY = config('FLUTTERWAVE_SECRET_KEY', default='')
FLUTTERWAVE_PUBLIC_KEY = config('FLUTTERWAVE_PUBLIC_KEY', default='')
FRONTEND_URL = config('FRONTEND_URL', default='http://localhost:3000')

# CORS configuration
if DEBUG:
    CORS_ALLOW_ALL_ORIGINS = True
else:
    CORS_ALLOW_ALL_ORIGINS = False
    CORS_ALLOWED_ORIGINS = [FRONTEND_URL]

# Production security settings
if not DEBUG:
    SECURE_SSL_REDIRECT = True
    SESSION_COOKIE_SECURE = True
    CSRF_COOKIE_SECURE = True
    SECURE_HSTS_SECONDS = int(config('SECURE_HSTS_SECONDS', 3600))
    SECURE_HSTS_INCLUDE_SUBDOMAINS = True
    SECURE_REFERRER_POLICY = 'same-origin'