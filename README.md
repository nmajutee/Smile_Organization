# 🌟 Smile Organization – NGO Web Application

> Empowering communities through technology. A secure and scalable platform connecting volunteers, donors, and staff to drive meaningful social impact.

---

## 📖 About The Project

**Smile Organization** is a web application designed to support the operations of a non-governmental organization (NGO). The platform enables seamless coordination between volunteers, donors, and staff members, making it easier to manage community development projects and track their impact.

### What Does It Do?

- 🙋‍♀️ **Volunteer Management** – Sign up, browse projects, and apply to volunteer opportunities
- 💰 **Donation Processing** – Secure online donations with automated receipts
- 📅 **Project Calendar** – View ongoing, upcoming, and past projects in an organized timeline
- 📝 **Blog & Updates** – Share news, success stories, and organizational updates
- 🔐 **Admin Dashboard** – Staff and administrators can manage users, projects, and content without technical knowledge

This project is part of the **ALX Backend Development Capstone** and demonstrates best practices in backend development, API design, and database architecture.

---

## ✨ Key Features

| Feature | Description |
|---------|-------------|
| **User Authentication** | Secure email registration, JWT-based login, and email verification |
| **Role-Based Access** | Four user roles: Volunteer, Donor, Staff, and Admin with appropriate permissions |
| **Volunteer Applications** | Apply to projects and receive approval notifications |
| **Secure Donations** | Integrated payment processing with Stripe (or local provider) and downloadable receipts |
| **Project Management** | Create, update, and filter projects by date, location, and status |
| **Event Calendar** | Visual calendar displaying project events and timelines |
| **Blogging System** | Publish posts with categories and tags for organizational updates |
| **Email Notifications** | Automated emails for approvals, receipts, and important updates |

---

## 🛠️ Technology Stack

**Backend:**
- Django & Django REST Framework (DRF)
- PostgreSQL Database
- JWT Authentication (SimpleJWT)

**Integrations:**
- Stripe / Local Payment Provider
- Django Email Backend / SMTP
- Swagger / OpenAPI for API Documentation

**Development Tools:**
- Git & GitHub
- Python 3.10+
- Virtual Environment (venv)

---

## 🚀 Getting Started

Follow these steps to set up the project on your local machine.

### Prerequisites

- Python 3.10 or higher
- PostgreSQL installed and running
- Git installed
- A code editor (VS Code recommended)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/nmajutee/Smile_Organization.git
   cd Smile_Organization
   ```

2. **Create and activate a virtual environment**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Linux/Mac
   # venv\Scripts\activate   # On Windows
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Set up environment variables**

   Create a `.env` file in the root directory:
   ```env
   SECRET_KEY=your_django_secret_key
   DEBUG=True
   DATABASE_URL=postgresql://user:password@localhost:5432/smile_db
   EMAIL_HOST=smtp.gmail.com
   EMAIL_HOST_USER=your_email@gmail.com
   EMAIL_HOST_PASSWORD=your_app_password
   STRIPE_SECRET_KEY=your_stripe_secret_key
   ```

5. **Run database migrations**
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

6. **Create a superuser (admin)**
   ```bash
   python manage.py createsuperuser
   ```

7. **Start the development server**
   ```bash
   python manage.py runserver
   ```

The application will be available at: `http://127.0.0.1:8000`

---

## 📚 API Documentation

Once the server is running, access the interactive API documentation at:

- **Swagger UI**: `http://127.0.0.1:8000/api/docs/`

### Sample API Endpoints

#### Authentication
- `POST /api/auth/register/` – Register a new user
- `POST /api/auth/login/` – Login and receive JWT token
- `POST /api/auth/verify-email/` – Verify email address

#### Projects
- `GET /api/projects/` – List all projects
- `GET /api/projects/{id}/` – Get project details
- `POST /api/projects/` – Create a new project (Staff/Admin only)
- `PUT /api/projects/{id}/` – Update project details
- `DELETE /api/projects/{id}/` – Delete a project

#### Donations
- `POST /api/donations/` – Make a donation
- `GET /api/donations/me/` – View your donation history
- `GET /api/donations/{id}/receipt/` – Download donation receipt

#### Calendar & Blog
- `GET /api/calendar/` – View project calendar
- `GET /api/blog/` – List blog posts
- `POST /api/blog/` – Create a new blog post (Staff/Admin only)

---

## 🎯 Project Goals & Success Metrics

### Primary Goals
✅ Launch a functional MVP supporting volunteering, donations, and project management
✅ Implement secure payment processing with automated receipts
✅ Enable non-technical staff to manage content independently

### Success Metrics (3-month target)
- **50+ registered volunteers**
- **10+ successful donations**
- **Zero security incidents**

---

## 📅 Development Timeline

The backend MVP was developed over **4 weeks**:

| Week | Focus Areas |
|------|-------------|
| **Week 1** | Environment setup, user authentication, JWT implementation, email verification |
| **Week 2** | Project CRUD operations, volunteer application flow, role-based permissions |
| **Week 3** | Donation processing with Stripe, receipt generation, calendar API |
| **Week 4** | Blog functionality, admin enhancements, security hardening, testing, documentation |

---

## 🧪 Testing

Run the test suite:

```bash
python manage.py test
```

Use tools like **Postman** or **curl** to test API endpoints manually. Remember to include your JWT token in the Authorization header:

```
Authorization: Bearer <your_jwt_token>
```

---

## 🔮 Future Enhancements

- 🔄 Recurring donation subscriptions
- 📊 Analytics dashboard with impact metrics
- 🌍 Multi-language support
- 📆 Volunteer shift scheduling system
- 🔗 Integration with CRM platforms
- 📱 Mobile application (React Native)

---

## ⚠️ Known Risks & Mitigations

| Risk | Mitigation Strategy |
|------|---------------------|
| Payment provider limitations | Selected regionally-supported payment providers with fallback options |
| Data privacy concerns | Strict data policies; no raw card storage; GDPR compliance considerations |
| Scope creep | MVP feature freeze; additional features logged in backlog for post-launch |

---

## 👥 Contributors

**Project Lead & Developer:** [Terence Onyema Nmaju](https://github.com/nmajutee)

**Institution:** ALX Africa
**Program:** Backend Development Capstone 2025

---

## 📄 License

This project is licensed under the **MIT License** – see the LICENSE file for details.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📧 Contact

For questions or support, please reach out through GitHub issues or contact the project maintainer.

**Project Repository:** [https://github.com/nmajutee/Smile_Organization](https://github.com/nmajutee/Smile_Organization)

---

<div align="center">
  <p>Built with ❤️ for communities that need it most</p>
  <p><strong>Making a difference, one line of code at a time</strong></p>
</div>