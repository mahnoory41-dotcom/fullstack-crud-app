# Full Stack CRUD Application

A Full Stack CRUD application built with Laravel 12, React (Vite), MySQL, and Axios.

---

## Technologies Used

### Backend
- Laravel 12
- PHP
- MySQL

### Frontend
- React (Vite)
- Axios

---

## Backend Setup

```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan serve
```

Backend runs at:

```
http://127.0.0.1:8000
```

---

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

## Frontend Environment Variable

Create a `.env` file inside the frontend folder.

```env
VITE_API_URL=http://127.0.0.1:8000/api
```

---

## Features

- Create Post
- View Posts
- Update Post
- Delete Post
- Laravel Validation
- Axios API Integration
- Responsive UI

---

## API Endpoints

| Method | Endpoint |
|--------|----------|
| GET | /api/posts |
| GET | /api/posts/{id} |
| POST | /api/posts |
| PUT | /api/posts/{id} |
| DELETE | /api/posts/{id} |

---

## Author

Mahnoor Yasir