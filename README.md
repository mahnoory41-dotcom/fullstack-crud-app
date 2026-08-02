# Full Stack CRUD Application with Authentication

A Full Stack CRUD application built with Laravel 12, React (Vite), MySQL, Laravel Sanctum, Axios, and React Router.

---

# Technologies Used

## Backend

- Laravel 12
- PHP
- MySQL
- Laravel Sanctum

## Frontend

- React (Vite)
- React Router DOM
- Axios

---

# Features

## Authentication

- User Registration
- User Login
- User Logout
- Laravel Sanctum Authentication
- Protected Routes
- Token-based Authentication
- Auto Logout on Invalid Token

## Authorization

- Each user can only manage their own posts
- Unauthorized update/delete returns 403 Forbidden
- Edit/Delete buttons visible only for the owner

## CRUD

- Create Post
- View Posts
- Update Post
- Delete Post
- Laravel Request Validation

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

Backend URL

```
http://127.0.0.1:8000
```

---

# Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend URL

```
http://localhost:5173
```

---

# Frontend Environment Variable

Create a `.env` file inside the frontend folder.

```env
VITE_API_URL=http://127.0.0.1:8000/api
```

---

# API Endpoints

## Public

| Method | Endpoint |
|--------|----------|
| POST | /api/register |
| POST | /api/login |

## Protected (Sanctum)

| Method | Endpoint |
|--------|----------|
| POST | /api/logout |
| GET | /api/posts |
| GET | /api/posts/{id} |
| POST | /api/posts |
| PUT | /api/posts/{id} |
| DELETE | /api/posts/{id} |

---

# Assignment Features Completed

- Laravel Sanctum Authentication
- User Registration
- User Login
- User Logout
- Protected API Routes
- React Authentication Context
- Axios Interceptor
- Protected Frontend Routes
- Ownership Authorization
- 403 Forbidden Handling
- Automatic Logout on Invalid Token

---

# Author

Mahnoor Yasir