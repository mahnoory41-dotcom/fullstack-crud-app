# Full Stack CRUD Application

A professional Full Stack CRUD application built with Laravel 12, React (Vite), MySQL and Laravel Sanctum Authentication.

---

# Technologies

## Backend

- Laravel 12
- PHP
- Laravel Sanctum
- MySQL

## Frontend

- React (Vite)
- React Router
- Axios
- CSS3

---

# Features

## Authentication

- User Registration
- User Login
- User Logout
- Laravel Sanctum Authentication
- Protected Routes
- Axios Token Interceptor
- Auto Redirect
- Auto Logout on Invalid Token

---

## Posts

- Create Posts
- Read Posts
- Update Posts
- Delete Posts
- Validation
- User Ownership Protection

---

## Role Based Access

- Admin Role
- User Role
- Admin can manage all posts
- User can manage only own posts

---

## Password Reset

- Forgot Password
- Reset Password
- Mailtrap Email Integration

---

## Security

- Laravel Sanctum
- Login Rate Limiting
- Protected API Routes
- HTTP 403 Authorization
- HTTP 429 Rate Limiting

---

## Automated Testing

- Guest cannot create posts
- User cannot delete another user's posts

Run tests

```bash
php artisan test
```

---

# Backend Setup

```bash
cd backend

composer install

cp .env.example .env

php artisan key:generate

php artisan migrate

php artisan serve
```

---

# Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

---

# Frontend Environment

```env
VITE_API_URL=http://127.0.0.1:8000/api
```

---

# Demo Features

- Register
- Login
- Create Posts
- Update Posts
- Delete Posts
- Forgot Password
- Reset Password
- Role Based Authorization
- Rate Limiting
- Feature Tests
- Responsive UI

---

# Author

Mahnoor Yasir
BS Computer Science
Quaid-i-Azam University