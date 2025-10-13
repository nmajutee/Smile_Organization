# 🎯 UPDATED TECH STACK - Vue.js Frontend
**Updated:** October 13, 2025  
**Architecture:** Django REST API Backend + Vue.js Frontend

---

## 🏗️ COMPLETE TECHNOLOGY STACK

### **Backend (Django REST API)**

#### Core Framework
- **Django 4.2.16 LTS** - Backend framework
- **Django REST Framework 3.15.2** - RESTful API
- **Python 3.8** - Programming language

#### Database
- **PostgreSQL** - Production database (Render)
- **SQLite** - Development database (faster for local)

#### Authentication & Security
- **JWT (djangorestframework-simplejwt)** - Token-based auth
- **Django CORS Headers** - Cross-origin support for Vue.js
- **Django Rate Limit** - API throttling

#### Payment Integration
- **Flutterwave API** - Primary payment gateway (Africa)
- **PayPal REST SDK** - International payments
- **Webhooks** - Payment verification

#### File & Document Processing
- **Pillow** - Image uploads and processing
- **ReportLab** - PDF receipt generation
- **Whitenoise** - Static file serving

#### Email & Notifications
- **Django Email Backend** - SMTP support
- **Django Anymail** - Multi-provider email

---

### **Frontend (Vue.js 3)**

#### Core Framework
- **Vue.js 3** - Progressive JavaScript framework
- **Composition API** - Modern Vue.js syntax
- **Vite** - Fast dev server and build tool

#### Routing & State
- **Vue Router 4** - Client-side routing
- **Pinia** - State management (Vue store)
- **VueUse** - Composition utilities

#### UI & Styling
- **Tailwind CSS 3** - Utility-first CSS framework
- **Headless UI** - Accessible UI components
- **Heroicons** - Beautiful SVG icons

#### HTTP & API
- **Axios** - HTTP client for REST API calls
- **Axios Interceptors** - JWT token handling

#### Form Handling
- **VeeValidate** - Form validation
- **Yup** - Schema validation

#### Additional Tools
- **Vue DevTools** - Debugging
- **ESLint** - Code quality
- **Prettier** - Code formatting

---

### **Development Tools**

#### Backend Tools
- **Django Extensions** - Shell plus, management commands
- **Django Debug Toolbar** - Backend debugging
- **Faker** - Test data generation

#### Frontend Tools
- **Vite Dev Server** - Hot module replacement
- **Vue DevTools** - Component inspection
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

---

### **Deployment & Infrastructure**

#### Hosting
- **Render.com** - Backend hosting
- **Vercel** OR **Netlify** - Frontend hosting (optional)
- **Render.com** - Full-stack option (both backend + frontend)

#### Backend Server
- **Gunicorn** - WSGI HTTP server
- **Whitenoise** - Static files middleware

#### Database
- **PostgreSQL on Render** - Managed database

#### CI/CD
- **Git/GitHub** - Version control
- **Render Auto-Deploy** - Automatic deployments

---

## 📁 PROJECT STRUCTURE

```
Smile_Organization/
│
├── backend/                          # Django REST API
│   ├── apps/
│   │   ├── accounts/                # Authentication & users
│   │   ├── projects/                # Project management
│   │   ├── donations/               # Payment processing
│   │   ├── blog/                    # Blog & news
│   │   ├── calendar_app/            # Events calendar
│   │   └── core/                    # Core functionality
│   │
│   ├── smile_backend/               # Django settings
│   │   ├── settings.py              # Configuration
│   │   ├── urls.py                  # API routing
│   │   └── utils/                   # Helper functions
│   │
│   ├── manage.py                    # Django management
│   ├── requirements.txt             # Python dependencies
│   └── .env                         # Environment variables
│
├── frontend/                        # Vue.js Application (NEW)
│   ├── public/                      # Static assets
│   ├── src/
│   │   ├── assets/                  # Images, fonts
│   │   ├── components/              # Reusable Vue components
│   │   │   ├── auth/                # Auth components
│   │   │   ├── projects/            # Project components
│   │   │   ├── donations/           # Donation components
│   │   │   └── common/              # Shared components
│   │   │
│   │   ├── views/                   # Page components
│   │   │   ├── Home.vue
│   │   │   ├── Projects.vue
│   │   │   ├── Donate.vue
│   │   │   └── Dashboard.vue
│   │   │
│   │   ├── router/                  # Vue Router config
│   │   │   └── index.js
│   │   │
│   │   ├── stores/                  # Pinia stores
│   │   │   ├── auth.js
│   │   │   ├── projects.js
│   │   │   └── donations.js
│   │   │
│   │   ├── api/                     # API service layer
│   │   │   ├── axios.js             # Axios config
│   │   │   ├── auth.js              # Auth API calls
│   │   │   ├── projects.js          # Projects API
│   │   │   └── donations.js         # Donations API
│   │   │
│   │   ├── utils/                   # Helper functions
│   │   ├── App.vue                  # Root component
│   │   └── main.js                  # Entry point
│   │
│   ├── index.html                   # HTML entry
│   ├── vite.config.js              # Vite configuration
│   ├── tailwind.config.js          # Tailwind config
│   ├── package.json                 # Node dependencies
│   └── .env                         # Frontend env variables
│
├── README.md
└── 7_DAY_SPRINT_PLAN.md
```

---

## 🔄 ARCHITECTURE FLOW

```
┌─────────────────────────────────────────────────┐
│                   USER                           │
└───────────────────┬─────────────────────────────┘
                    │
                    ▼
        ┌───────────────────────┐
        │   Vue.js Frontend      │
        │   (Port 5173)          │
        │                        │
        │  - Components          │
        │  - Vue Router          │
        │  - Pinia Store         │
        │  - Tailwind CSS        │
        └───────────┬───────────┘
                    │
                    │ HTTP/HTTPS
                    │ REST API Calls
                    │ (Axios + JWT)
                    │
                    ▼
        ┌───────────────────────┐
        │  Django REST API       │
        │  (Port 8000)           │
        │                        │
        │  - JWT Auth            │
        │  - CORS Enabled        │
        │  - API Endpoints       │
        └───────────┬───────────┘
                    │
                    ├──────────┬──────────┬──────────┐
                    ▼          ▼          ▼          ▼
            ┌──────────┐ ┌─────────┐ ┌─────────┐ ┌──────┐
            │PostgreSQL│ │Flutterw.│ │ PayPal  │ │Email │
            │ Database │ │   API   │ │   API   │ │ SMTP │
            └──────────┘ └─────────┘ └─────────┘ └──────┘
```

---

## 🚀 SETUP INSTRUCTIONS

### Backend Setup (Django)
```bash
# Navigate to project root
cd /home/alx/Smile_Organization

# Activate virtual environment
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Create .env file
cp .env.example .env
nano .env  # Configure settings

# Run migrations
python manage.py migrate

# Create superuser
python manage.py createsuperuser

# Start backend server
python manage.py runserver
# Backend running at: http://localhost:8000
```

### Frontend Setup (Vue.js)
```bash
# Navigate to project root
cd /home/alx/Smile_Organization

# Create Vue.js frontend
npm create vite@latest frontend -- --template vue

# Navigate to frontend
cd frontend

# Install dependencies
npm install

# Install additional packages
npm install vue-router@4 pinia axios tailwindcss postcss autoprefixer
npm install @headlessui/vue @heroicons/vue vee-validate yup

# Initialize Tailwind CSS
npx tailwindcss init -p

# Start development server
npm run dev
# Frontend running at: http://localhost:5173
```

---

## 🔐 AUTHENTICATION FLOW (JWT)

### 1. User Login (Vue.js)
```javascript
// frontend/src/api/auth.js
import axios from './axios'

export const login = async (email, password) => {
  const response = await axios.post('/api/auth/login/', {
    email,
    password
  })
  // Store JWT tokens
  localStorage.setItem('access_token', response.data.access)
  localStorage.setItem('refresh_token', response.data.refresh)
  return response.data
}
```

### 2. Axios Interceptor (Auto JWT)
```javascript
// frontend/src/api/axios.js
import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    'Content-Type': 'application/json'
  }
})

// Add token to all requests
instance.interceptors.request.use(config => {
  const token = localStorage.getItem('access_token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default instance
```

### 3. Django API (Verify JWT)
```python
# Backend automatically verifies JWT
# Using djangorestframework-simplejwt
```

---

## 📦 FRONTEND DEPENDENCIES

```json
{
  "dependencies": {
    "vue": "^3.4.0",
    "vue-router": "^4.2.0",
    "pinia": "^2.1.0",
    "axios": "^1.6.0",
    "vee-validate": "^4.12.0",
    "yup": "^1.3.0",
    "@headlessui/vue": "^1.7.0",
    "@heroicons/vue": "^2.1.0"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^5.0.0",
    "vite": "^5.0.0",
    "tailwindcss": "^3.4.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0",
    "eslint": "^8.0.0",
    "prettier": "^3.0.0"
  }
}
```

---

## 🎯 API ENDPOINTS (Backend)

### Authentication
- `POST /api/auth/register/` - User registration
- `POST /api/auth/login/` - JWT login
- `POST /api/auth/refresh/` - Refresh JWT token
- `POST /api/auth/logout/` - Logout
- `GET /api/auth/profile/` - Get user profile
- `PUT /api/auth/profile/` - Update profile

### Projects
- `GET /api/projects/` - List projects
- `GET /api/projects/:id/` - Project detail
- `POST /api/projects/` - Create project (Staff only)
- `PUT /api/projects/:id/` - Update project
- `DELETE /api/projects/:id/` - Delete project
- `POST /api/projects/:id/apply/` - Volunteer application

### Donations
- `POST /api/donations/` - Initiate donation
- `POST /api/donations/verify/` - Verify payment
- `GET /api/donations/me/` - User donations
- `GET /api/donations/:id/receipt/` - Download receipt

### Blog
- `GET /api/blog/` - List posts
- `GET /api/blog/:id/` - Post detail
- `POST /api/blog/` - Create post (Staff only)

### Calendar
- `GET /api/calendar/` - List events
- `GET /api/calendar/:id/` - Event detail

---

## 🎨 FRONTEND PAGES (Vue.js)

### Public Pages
- **Home** (`/`) - Landing page
- **About** (`/about`) - Organization info
- **Projects** (`/projects`) - Browse projects
- **Project Detail** (`/projects/:id`) - Single project
- **Blog** (`/blog`) - Blog posts
- **Contact** (`/contact`) - Contact form

### Authentication Pages
- **Login** (`/login`) - User login
- **Register** (`/register`) - User registration
- **Forgot Password** (`/forgot-password`) - Password reset

### User Dashboard
- **Dashboard** (`/dashboard`) - User overview
- **My Projects** (`/dashboard/projects`) - Volunteer projects
- **My Donations** (`/dashboard/donations`) - Donation history
- **Profile** (`/dashboard/profile`) - Edit profile

### Donation Flow
- **Donate** (`/donate`) - Select project
- **Checkout** (`/donate/checkout`) - Payment form
- **Success** (`/donate/success`) - Payment confirmation

### Admin (Optional)
- **Admin Dashboard** (`/admin`) - Staff interface

---

## 🔥 KEY BENEFITS OF VUE.JS

### Why Vue.js over Alpine.js?
1. ✅ **Component System** - Reusable, modular components
2. ✅ **Vue Router** - Seamless page navigation
3. ✅ **State Management** - Pinia for global state
4. ✅ **Better Tooling** - Vue DevTools, Vite HMR
5. ✅ **Ecosystem** - Rich library of components
6. ✅ **TypeScript Support** - Optional type safety
7. ✅ **Single Page Application** - Faster, smoother UX
8. ✅ **Mobile Ready** - Responsive by design

---

## ⏱️ UPDATED TIMELINE

### Backend (Days 1-5): Same as before
- Focus on REST API endpoints
- JWT authentication
- Payment integration
- Deploy backend to Render

### Frontend (Days 3-5): Parallel Development
**Day 3:** Setup Vue.js project, auth pages
**Day 4:** Projects & donations pages
**Day 5:** Polish & deploy frontend

---

## 🚀 DEPLOYMENT

### Backend (Render.com)
- Deploy Django REST API
- PostgreSQL database
- Environment variables

### Frontend Options

**Option 1: Vercel (Recommended)**
```bash
npm run build
vercel --prod
```

**Option 2: Netlify**
```bash
npm run build
netlify deploy --prod
```

**Option 3: Render (Full-stack)**
- Deploy both backend and frontend on Render
- Serve Vue build files through Django

---

## 📚 LEARNING RESOURCES

### Vue.js
- Official Docs: https://vuejs.org/
- Vue Router: https://router.vuejs.org/
- Pinia: https://pinia.vuejs.org/

### Django REST + Vue
- Django CORS: https://github.com/adamchainz/django-cors-headers
- JWT Auth: https://django-rest-framework-simplejwt.readthedocs.io/

---

**Ready to build with Vue.js! This is a modern, professional stack! 🚀**
