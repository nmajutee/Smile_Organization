# Smile Organization - NGO Platform

A web platform that connects volunteers and donors with NGO projects.

## What It Does

- **Volunteer**: Browse projects and apply to volunteer
- **Donate**: Support projects with online payments
- **Track**: See project progress and upcoming events
- **Read**: Stay updated with blog posts and news

## Built With

- Django 4.2 (Backend API)
- Vue.js (Frontend - coming soon)
- SQLite (Development) / PostgreSQL (Production)
- Flutterwave (Payment processing)

## Quick Start

```bash
# Install dependencies
pip install -r [requirements.txt](http://_vscodecontentref_/0)

# Setup database
python [manage.py](http://_vscodecontentref_/1) migrate

# Create admin account
python [manage.py](http://_vscodecontentref_/2) createsuperuser

# Run server
python [manage.py](http://_vscodecontentref_/3) runserver

Visit: http://127.0.0.1:8000/admin

## Features

✅ User registration and login
✅ Project browsing and volunteering
✅ Online donations with payment tracking
✅ Blog for updates and stories
✅ Event calendar
✅ Admin dashboard

## API Endpoints
- `/api/accounts/register/`    - Sign up
- `/api/accounts/login/`       - Login (JWT)
- `/api/projects/`             - List/create projects
- `/api/donations/create/`     - Make donation
- `/api/blog/`                 - Blog posts
- `/api/events/`               - Calendar events

## Project Structure
apps/
- `accounts/`      - User authentication
- `projects/`      - Project management
- `donations/`     - Payment processing
- `blog/`          - News and updates
- `calendar_app/`  - Events
- `core/`          - About/Contact pages

## Author
Terence Nmaju
ALX BE - Capstone Project 2025