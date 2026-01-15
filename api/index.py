import os
from django.core.wsgi import get_wsgi_application

# Vercel needs to know where settings are
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'smile_backend.settings')

# This 'app' object is the entry point Vercel looks for
app = get_wsgi_application()
