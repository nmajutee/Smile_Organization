#!/bin/bash
# Quick Command Reference for Smile Organization Project

echo "╔═══════════════════════════════════════════════════════════╗"
echo "║     SMILE ORGANIZATION - QUICK COMMAND REFERENCE          ║"
echo "╚═══════════════════════════════════════════════════════════╝"
echo ""

# Check if virtual environment is activated
if [ -z "$VIRTUAL_ENV" ]; then
    echo "⚠️  Virtual environment NOT activated!"
    echo "Run: source ngo/bin/activate"
    echo ""
    exit 1
fi

echo "✅ Virtual environment: ACTIVATED"
echo "📂 Project: Smile Organization"
echo ""

echo "╔═══════════════════════════════════════════════════════════╗"
echo "║                  COMMON DJANGO COMMANDS                    ║"
echo "╚═══════════════════════════════════════════════════════════╝"
echo ""

echo "🔷 DEVELOPMENT SERVER:"
echo "   python manage.py runserver"
echo "   → http://localhost:8000"
echo ""

echo "🔷 DATABASE MIGRATIONS:"
echo "   python manage.py makemigrations        # Create migrations"
echo "   python manage.py migrate               # Apply migrations"
echo "   python manage.py showmigrations        # Show migration status"
echo ""

echo "🔷 SUPERUSER:"
echo "   python manage.py createsuperuser       # Create admin user"
echo ""

echo "🔷 SHELL & TESTING:"
echo "   python manage.py shell                 # Django shell"
echo "   python manage.py test                  # Run tests"
echo "   pytest                                 # Run tests with pytest"
echo ""

echo "🔷 STATIC FILES:"
echo "   python manage.py collectstatic         # Collect static files"
echo ""

echo "🔷 PROJECT CHECK:"
echo "   python manage.py check                 # Check for issues"
echo "   python manage.py check --deploy        # Production checks"
echo ""

echo "╔═══════════════════════════════════════════════════════════╗"
echo "║                    PROJECT STRUCTURE                       ║"
echo "╚═══════════════════════════════════════════════════════════╝"
echo ""

echo "📁 apps/accounts/       → User authentication & roles"
echo "📁 apps/projects/       → Project management"
echo "📁 apps/donations/      → Payment processing"
echo "📁 apps/blog/           → Blog & news"
echo "📁 apps/calendar_app/   → Events calendar"
echo "📁 apps/core/           → Core pages (home, about, contact)"
echo ""
echo "📁 config/              → Django project configuration"
echo "📄 manage.py            → Django management commands"
echo ""

echo "╔═══════════════════════════════════════════════════════════╗"
echo "║                    QUICK START GUIDE                       ║"
echo "╚═══════════════════════════════════════════════════════════╝"
echo ""

echo "1️⃣  Create your models in apps/*/models.py"
echo "2️⃣  Run: python manage.py makemigrations"
echo "3️⃣  Run: python manage.py migrate"
echo "4️⃣  Register models in apps/*/admin.py"
echo "5️⃣  Create views in apps/*/views.py"
echo "6️⃣  Create URLs in apps/*/urls.py"
echo "7️⃣  Create templates in apps/*/templates/"
echo "8️⃣  Run: python manage.py runserver"
echo ""

echo "📚 Documentation:"
echo "   - README.md              → Project overview"
echo "   - DJANGO_INITIALIZED.md  → Django setup details"
echo "   - PROJECT_STRUCTURE.md   → Structure guide"
echo ""

echo "🎓 Ready to start coding! Good luck! 🚀"
