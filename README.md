# Smile Organization - NGO Backend

my capstone project for ALX. trying to build an ngo platform where people can volunteer and donate.

## what it does (hopefully)
- user registration and login
- browse projects
- volunteer for projects
- donate money (flutterwave/paypal)
- blog posts
- calendar events

## tech stack
- django 4.2
- django rest framework
- sqlite (for now, will use postgres later)
- vue.js frontend (separate repo maybe?)

## setup

```bash
# clone repo
git clone https://github.com/nmajutee/Smile_Organization.git
cd Smile_Organization

# make virtual environment
python3 -m venv venv
source venv/bin/activate

# install stuff
pip install -r requirements.txt

# run migrations
python manage.py migrate

# create admin user
python manage.py createsuperuser

# run server
python manage.py runserver
```

visit http://127.0.0.1:8000/admin

## apps
- `accounts` - user auth and profiles
- `projects` - project management
- `donations` - payment processing
- `blog` - news and updates
- `calendar_app` - events
- `core` - home page stuff

## api endpoints (work in progress)
- `/api/auth/register/` - register
- `/api/auth/login/` - login
- `/api/projects/` - list projects
- `/api/donations/` - make donation
- more coming...

## todo
- [ ] finish auth endpoints
- [ ] test with postman
- [ ] add permissions
- [ ] integrate flutterwave
- [ ] write tests
- [ ] deploy on render
- [ ] add frontend

## known issues
- cors too permissive
- debug mode on
- secret key in code
- no email verification
- sqlite instead of postgres
- many security issues to fix

will fix these later when i understand django better

## author
Terence Nmaju - ALX Backend Capstone 2025
