#!/usr/bin/env python
"""
Seed database with initial data from frontend
"""
import os
import sys
from datetime import date, timedelta
from decimal import Decimal

# Add the project directory to the path
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

# Setup Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'smile_backend.settings')

import django
django.setup()

from django.contrib.auth import get_user_model
from apps.projects.models import Project
from apps.donations.models import Donation

User = get_user_model()


def create_admin_user():
    """Create an admin user if one doesn't exist"""
    print("\n👤 Creating admin user...")

    admin_email = 'admin@smileorg.org'
    if not User.objects.filter(email=admin_email).exists():
        admin = User.objects.create_superuser(
            email=admin_email,
            password='SmileAdmin2024!',
            first_name='Admin',
            last_name='User'
        )
        print(f"   ✅ Created admin user: {admin_email}")
        print(f"   📧 Email: {admin_email}")
        print(f"   🔑 Password: SmileAdmin2024!")
    else:
        admin = User.objects.get(email=admin_email)
        print(f"   ℹ️  Admin user already exists: {admin_email}")

    return admin


def create_projects(admin_user):
    """Create projects based on frontend data"""
    print("\n📋 Creating projects...")

    projects_data = [
        {
            'title': 'Healthy Food Program',
            'description': 'Through your donations and volunteer work, we spread kindness and support to children by providing nutritious meals. This program ensures that underprivileged children in Cameroon receive at least one healthy meal per day, combating malnutrition and supporting their physical development.',
            'location': 'Bamenda, Cameroon',
            'start_date': date.today() - timedelta(days=90),
            'end_date': date.today() + timedelta(days=180),
            'status': 'ongoing',
            'volunteer_needed': 50,
            'donation_goal': Decimal('6000000.00'),  # 6M XAF
            'donation_raised': Decimal('4800000.00'),  # 4.8M XAF
            'image': 'projects/back-to-school-campaign.jpg',
        },
        {
            'title': 'Clean Water Treatment',
            'description': 'Access to clean water is a fundamental right. This project installs water purification systems in rural communities, trains local maintenance teams, and educates communities about water hygiene practices to reduce waterborne diseases.',
            'location': 'Douala, Cameroon',
            'start_date': date.today() - timedelta(days=120),
            'end_date': date.today() + timedelta(days=90),
            'status': 'ongoing',
            'volunteer_needed': 30,
            'donation_goal': Decimal('6000000.00'),
            'donation_raised': Decimal('5700000.00'),
            'image': 'projects/Empowering-the-New-Generation.jpg',
        },
        {
            'title': 'Education Support Initiative',
            'description': 'Education is the foundation of change. This initiative provides school supplies, uniforms, and tuition support for children from low-income families, ensuring they have equal access to quality education and opportunities for a brighter future.',
            'location': 'Yaoundé, Cameroon',
            'start_date': date.today() - timedelta(days=60),
            'end_date': date.today() + timedelta(days=270),
            'status': 'ongoing',
            'volunteer_needed': 100,
            'donation_goal': Decimal('6000000.00'),
            'donation_raised': Decimal('4500000.00'),
            'image': 'projects/InShot_20230911_205422159.jpg',
        },
        {
            'title': 'Child Nutrition Program',
            'description': 'Every child deserves proper nutrition for healthy growth. This program provides balanced meals, nutritional supplements, and health education to combat childhood malnutrition in underserved communities across Cameroon.',
            'location': 'Bafoussam, Cameroon',
            'start_date': date.today() - timedelta(days=45),
            'end_date': date.today() + timedelta(days=225),
            'status': 'ongoing',
            'volunteer_needed': 40,
            'donation_goal': Decimal('6000000.00'),
            'donation_raised': Decimal('5100000.00'),
            'image': 'projects/InShot_20230911_205611720.jpg',
        },
        {
            'title': 'Community Medical Care',
            'description': 'Healthcare should be accessible to all. This project operates mobile health clinics providing free medical consultations, vaccinations, and essential medications to remote communities with limited access to healthcare facilities.',
            'location': 'Maroua, Cameroon',
            'start_date': date.today() - timedelta(days=30),
            'end_date': date.today() + timedelta(days=300),
            'status': 'ongoing',
            'volunteer_needed': 25,
            'donation_goal': Decimal('6000000.00'),
            'donation_raised': Decimal('5400000.00'),
            'image': 'projects/InShot_20230911_210951284.jpg',
        },
        {
            'title': 'Back to School Campaign',
            'description': 'Help children return to school with dignity. This campaign provides school supplies including books, notebooks, pens, backpacks, and uniforms to students who cannot afford them, removing barriers to education.',
            'location': 'Garoua, Cameroon',
            'start_date': date.today() - timedelta(days=15),
            'end_date': date.today() + timedelta(days=120),
            'status': 'ongoing',
            'volunteer_needed': 75,
            'donation_goal': Decimal('6000000.00'),
            'donation_raised': Decimal('4200000.00'),
            'image': 'projects/InShot_20230911_211148189.jpg',
        },
    ]

    created_count = 0
    for project_data in projects_data:
        project, created = Project.objects.get_or_create(
            title=project_data['title'],
            defaults={
                **project_data,
                'created_by': admin_user,
            }
        )
        if created:
            created_count += 1
            print(f"   ✅ Created: {project.title}")
        else:
            # Update existing project with new data
            for key, value in project_data.items():
                setattr(project, key, value)
            project.save()
            print(f"   🔄 Updated: {project.title}")

    print(f"\n   📊 Total: {created_count} new projects created, {len(projects_data) - created_count} updated")
    return Project.objects.all()


def create_sample_donations(admin_user, projects):
    """Create sample donations for demo purposes"""
    print("\n💰 Creating sample donations...")

    if not projects:
        print("   ⚠️  No projects found, skipping donations")
        return

    sample_donors = [
        {'name': 'Jean Pierre', 'email': 'jean.pierre@example.com'},
        {'name': 'Marie Ngong', 'email': 'marie.ngong@example.com'},
        {'name': 'Emmanuel Fon', 'email': 'emmanuel.fon@example.com'},
        {'name': 'Beatrice Atanga', 'email': 'beatrice.atanga@example.com'},
        {'name': 'Paul Biya Jr', 'email': 'paul.biya@example.com'},
    ]

    amounts = [5000, 10000, 25000, 50000, 100000, 150000]
    payment_methods = ['mobile_money', 'orange_money', 'flutterwave']

    created_count = 0
    for i, donor in enumerate(sample_donors):
        project = projects[i % len(projects)]
        amount = amounts[i % len(amounts)]

        donation, created = Donation.objects.get_or_create(
            donor_email=donor['email'],
            project=project,
            defaults={
                'donor_name': donor['name'],
                'amount': Decimal(str(amount)),
                'currency': 'XAF',
                'payment_method': payment_methods[i % len(payment_methods)],
                'status': 'successful',
                'message': f'Happy to support {project.title}!',
            }
        )
        if created:
            created_count += 1
            print(f"   ✅ {donor['name']} donated {amount:,} XAF to {project.title}")

    print(f"\n   📊 Total: {created_count} donations created")


def main():
    """Main function to seed the database"""
    print("=" * 60)
    print("🌱 SEEDING SMILE ORGANIZATION DATABASE")
    print("=" * 60)

    # Create admin user
    admin_user = create_admin_user()

    # Create projects
    projects = create_projects(admin_user)

    # Create sample donations
    create_sample_donations(admin_user, projects)

    print("\n" + "=" * 60)
    print("✅ DATABASE SEEDING COMPLETE!")
    print("=" * 60)
    print("\n📌 Summary:")
    print(f"   • Projects: {Project.objects.count()}")
    print(f"   • Donations: {Donation.objects.count()}")
    print(f"   • Users: {User.objects.count()}")
    print("\n🔗 You can now start the servers:")
    print("   Backend:  cd /home/alx/Smile_Organization && python manage.py runserver")
    print("   Frontend: cd smile_frontend_v2 && npm run dev")
    print()


if __name__ == '__main__':
    main()
