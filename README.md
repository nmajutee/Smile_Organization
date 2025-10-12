<div align="center">

# � Smile Organization — NGO Web Application (MVP)

### *Connecting Hearts, Changing Lives*

A secure, scalable, and SEO-optimized web platform for Smile Organization — designed to empower volunteers, donors, and staff to collaborate, donate, and stay informed about ongoing NGO projects.

[![Django](https://img.shields.io/badge/Django-5.0+-092E20?style=for-the-badge&logo=django&logoColor=white)](https://www.djangoproject.com/)
[![Python](https://img.shields.io/badge/Python-3.10-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Alpine.js](https://img.shields.io/badge/Alpine.js-3.x-8BC0D0?style=for-the-badge&logo=alpine.js&logoColor=white)](https://alpinejs.dev/)
[![HTMX](https://img.shields.io/badge/HTMX-Latest-3D72D7?style=for-the-badge&logo=htmx&logoColor=white)](https://htmx.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-13+-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Render](https://img.shields.io/badge/Render-Deployed-46E3B7?style=for-the-badge&logo=render&logoColor=white)](https://render.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)

[Overview](#-overview) • [Features](#-core-mvp-features) • [Quick Start](#-quick-start) • [Tech Stack](#️-tech-stack) • [Architecture](#️-system-architecture) • [Deployment](#-deployment-on-render)

</div>

---

## 🏗️ Overview

**Smile Organization** is a modern, secure, and scalable web application designed to connect volunteers, donors, and staff of an NGO under one digital platform. The system aims to promote transparency, accessibility, and engagement by digitizing volunteering, donations, project management, and awareness campaigns.

Built with **Django + Django REST Framework**, and powered by **HTMX, Alpine.js, and Tailwind CSS**, the application combines high performance, SEO readiness, and a beautiful user experience — while remaining simple enough to grow over time.

### 💡 Mission

To empower communities by providing a digital space where individuals can:

- ✨ **Discover** impactful NGO projects
- 🤝 **Volunteer** easily and make a difference
- 💰 **Donate** seamlessly through local and global payment channels
- 📰 **Stay informed** via news, blogs, and project calendars

Smile Organization bridges the gap between intent and action, making social impact accessible to everyone, everywhere.

### 🎯 Objectives

- ✅ Build a centralized platform for managing projects, volunteers, and donations
- ✅ Enable multi-gateway donations (Flutterwave, PayPal, Mobile Money, Orange Money, Crypto)
- ✅ Offer real-time project updates and event calendars
- ✅ Implement role-based dashboards for Admin, Staff, Volunteers, and Donors
- ✅ Optimize visibility with SEO, AEO (Answer Engine Optimization), GEO (Geographic Optimization), and AI-enhanced search
- ✅ Deploy a production-ready MVP on Render for public access

---

## 🧩 Core MVP Features

| Feature | Description |
|---------|-------------|
| 👥 **User Authentication & Roles** | Email registration, login, and verification with roles: Volunteer, Donor, Staff, Admin |
| 🎯 **Projects Module** | CRUD functionality with filters (date, category, location, status), media uploads, and progress tracking |
| 💰 **Donations System** | Secure multi-gateway payments (Flutterwave, PayPal, Mobile Money, Orange Money, and Crypto) with receipts and webhook verification |
| 📅 **Calendar System** | Displays ongoing, upcoming, and completed projects as events |
| 📰 **Blog Module** | CRUD for posts, categories, and tags to share updates, stories, and impact reports |
| 🔔 **Notifications** | Automated emails for registrations, approvals, receipts, and updates |
| 🧭 **SEO, AEO, GEO, and AI Ready** | Server-rendered, schema.org structured, geotagged pages optimized for search and AI visibility |
| 🧠 **AI Search (Post-MVP)** | Smart content discovery using semantic search and AI-generated summaries |
| 🛠️ **Admin Panel** | Centralized control for managing users, projects, donations, and content |

---

## 🏛️ System Architecture

```
Frontend (Django Templates + HTMX + Alpine.js + Tailwind)
            │
            ▼
Backend (Django + Django REST Framework)
            │
            ▼
PostgreSQL Database
            │
            ▼
Payment Integrations
(Flutterwave / PayPal / Mobile Money / Orange Money / Crypto)
            │
            ▼
Render Deployment (Web + Database)
```

---

## ⚙️ Tech Stack

### 🖥 Backend

- **Django 5+** – Core backend framework
- **Django REST Framework (DRF)** – API endpoints for future mobile/SPA integration
- **PostgreSQL** – Primary database (hosted on Render)
- **Gunicorn + Whitenoise** – For production-ready static file serving
- **Django Environ** – Secure environment configuration
- **HTMX** – AJAX-like dynamic requests without full-page reloads
- **Alpine.js** – Lightweight frontend interactivity
- **Tailwind CSS** – Modern UI design system (via CDN)

### 💳 Payment Integrations

- **Flutterwave API** – Local and international cards, bank transfers, Mobile Money, and crypto
- **PayPal REST SDK** – International donor support
- **MTN MoMo & Orange Money APIs** – Regional payment inclusion
- **Coinbase Commerce** – Crypto option

### 📊 Other Tools

- **Render** – CI/CD hosting and deployment
- **ReportLab** – For generating donation receipts as PDFs
- **django-cors-headers** – Cross-domain API management
- **django-heroicons** – Professional icon system

---

## 🌐 SEO, AEO, GEO & AI Optimizations

| Optimization | Implementation |
|--------------|----------------|
| **SEO** | Server-rendered HTML, meta tags, sitemaps, schema.org, canonical URLs |
| **AEO** | FAQPage schema, Q&A structured data, short-answer content for featured snippets |
| **GEO** | Project and event geolocation, region-based filtering, local language support |
| **AI** | Clean, structured content and optional AI summarization for blog posts and project pages |

---

## 🚀 Quick Start

### Prerequisites

- Python 3.10+
- PostgreSQL (optional for development)

### Installation

**1. Clone & Navigate**
```bash
git clone https://github.com/nmajutee/Smile_Organization.git
cd Smile_Organization
```

**2. Activate Virtual Environment**
```bash
source ngo/bin/activate
```

**3. Install Dependencies**
```bash
pip install -r requirements.txt
```

**4. Set Up Environment**
```bash
cp .env.example .env
# Edit .env with your configuration
```

**5. Run Migrations**
```bash
python manage.py migrate
python manage.py createsuperuser
```

**6. Start Development Server**
```bash
python manage.py runserver
```

✅ Visit **http://localhost:8000** to see your app!

---

## 🧱 Folder Structure

```
smile_organization/
├── manage.py
├── requirements.txt
├── runtime.txt
├── render.yaml
├── .gitignore
├── .env.example
├── README.md
│
├── smile_backend/
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py
│   ├── wsgi.py
│   ├── asgi.py
│   ├── templates/
│   │   ├── base/
│   │   └── includes/
│   ├── static/
│   └── utils/
│       ├── __init__.py
│       ├── emails.py
│       └── permissions.py
│
├── apps/
│   ├── accounts/
│   │   ├── models.py
│   │   ├── views.py
│   │   ├── urls.py
│   │   ├── forms.py
│   │   ├── serializers.py
│   │   ├── templates/accounts/
│   │   └── static/accounts/js/
│   │
│   ├── projects/
│   │   ├── models.py
│   │   ├── views.py
│   │   ├── urls.py
│   │   ├── serializers.py
│   │   ├── templates/projects/
│   │   └── static/projects/js/
│   │
│   ├── donations/
│   │   ├── models.py
│   │   ├── views.py
│   │   ├── urls.py
│   │   ├── payments/
│   │   │   ├── __init__.py
│   │   │   ├── flutterwave.py
│   │   │   ├── paypal.py
│   │   │   ├── mobile_money.py
│   │   │   ├── orange_money.py
│   │   │   └── crypto.py
│   │   ├── templates/donations/
│   │   └── static/donations/js/
│   │
│   ├── blog/
│   │   ├── models.py
│   │   ├── views.py
│   │   ├── urls.py
│   │   ├── templates/blog/
│   │   └── static/blog/js/
│   │
│   ├── calendar_app/
│   │   ├── models.py
│   │   ├── views.py
│   │   ├── urls.py
│   │   ├── templates/calendar/
│   │   └── static/calendar/js/
│   │
│   └── core/
│       ├── views.py
│       ├── urls.py
│       ├── templates/core/
│       └── static/core/js/
│
├── static_src/
│   ├── css/input.css
│   └── js/{htmx.min.js, alpine.min.js}
│
└── scripts/
    ├── collect_static.sh
    └── init_db.py
```

---

## 🔐 Security & Privacy

- ✅ HTTPS enforced on Render
- ✅ CSRF + JWT authentication
- ✅ Sensitive keys stored in environment variables
- ✅ No card data stored locally
- ✅ GDPR-ready privacy and consent structure

---

## 🎨 Frontend Setup

### Tailwind CSS & Alpine.js (CDN)

Add to your base template `smile_backend/templates/base.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{% block title %}Smile Organization{% endblock %}</title>

    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>

    <!-- Alpine.js -->
    <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>

    <!-- HTMX -->
    <script src="https://unpkg.com/htmx.org@1.9.10"></script>
</head>
<body>
    {% block content %}{% endblock %}
</body>
</html>
```

### Heroicons (Django Template Tags)

```html
{% load heroicons %}

<!-- Use icons in templates -->
<nav class="flex items-center gap-4">
    <a href="/" class="flex items-center gap-2">
        {% heroicon_outline "home" class="w-5 h-5" %}
        <span>Home</span>
    </a>

    <a href="/projects/">
        {% heroicon_outline "folder" class="w-5 h-5" %}
        <span>Projects</span>
    </a>

    <a href="/donate/">
        {% heroicon_solid "heart" class="w-5 h-5 text-red-500" %}
        <span>Donate</span>
    </a>
</nav>
```

**Setup:** Add `'heroicons'` to `INSTALLED_APPS` in `smile_backend/settings.py`

🔗 **Browse Icons:** [heroicons.com](https://heroicons.com/)

---

## 🧰 Development Commands

```bash
# Run development server
python manage.py runserver

# Create migrations
python manage.py makemigrations

# Apply migrations
python manage.py migrate

# Create superuser
python manage.py createsuperuser

# Collect static files
python manage.py collectstatic

# Run tests
pytest

# Quick reference
./scripts/commands.sh
```

---

## 🚀 Deployment on Render

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Create a Render Web Service**
   - Go to [render.com](https://render.com)
   - Connect your GitHub repository
   - Select "Web Service"

3. **Add environment variables** in Render Dashboard:
   - `SECRET_KEY` - Your Django secret key
   - `DEBUG=False` - Production mode
   - `DATABASE_URL` - Render will auto-provide
   - `FLUTTERWAVE_SECRET_KEY` - Payment gateway key
   - `PAYPAL_CLIENT_ID` - PayPal credentials
   - `PAYPAL_CLIENT_SECRET` - PayPal credentials

4. **Render auto-deploys** and your app will be live at:
   `https://smile-organization.onrender.com`

---

## 🧾 Post-MVP Roadmap

| Feature | Description |
|---------|-------------|
| 📊 **Analytics Dashboard** | Track donations, volunteer signups, project performance |
| 🧠 **AI Assistant** | Chatbot to answer donor/volunteer questions |
| 🌍 **Multi-language Support** | English & French for Cameroon audience |
| 💼 **Organization Portal** | Tools for partner NGOs to manage joint projects |
| 📱 **Mobile App** | Future frontend integration using Flutter or React Native |

---

## ◉ Contributing

This is a school project, but suggestions and feedback are welcome!

**1.** Fork the repository
**2.** Create your feature branch (`git checkout -b feature/AmazingFeature`)
**3.** Commit your changes (`git commit -m 'Add some AmazingFeature'`)
**4.** Push to the branch (`git push origin feature/AmazingFeature`)
**5.** Open a Pull Request

---

## ▤ License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## ▲ Author

<div align="center">

**Terence Onyema Nmaju**

Backend Developer | ALX Software Engineer | Founder @ BigTee LLC

📍 Cameroon

[![GitHub](https://img.shields.io/badge/GitHub-nmajutee-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/nmajutee)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com)
[![Portfolio](https://img.shields.io/badge/Portfolio-Visit-FF5722?style=for-the-badge&logo=google-chrome&logoColor=white)](https://bigtee.com)

</div>

---

<div align="center">

### ▲ Star this repo if you find it helpful!

Made with ◆ for social impact

</div>
