#!/usr/bin/env python
"""
Initialize database with migrations
"""
import os
import sys
import django

# Add the project directory to the path
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

# Setup Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'smile_backend.settings')
django.setup()

from django.core.management import call_command

def init_database():
    """Run migrations and create initial database structure"""
    print("🗄️  Initializing database...")

    try:
        # Make migrations
        print("\n📝 Creating migrations...")
        call_command('makemigrations')

        # Apply migrations
        print("\n⚙️  Applying migrations...")
        call_command('migrate')

        print("\n✅ Database initialized successfully!")
        print("\n💡 Next step: Create a superuser with 'python manage.py createsuperuser'")

    except Exception as e:
        print(f"\n❌ Error initializing database: {e}")
        sys.exit(1)

if __name__ == '__main__':
    init_database()
