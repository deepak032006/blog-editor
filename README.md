# 📝 Blog Editor Full Stack Project

A full-stack blog editor application built for internship evaluation.


#Live Demo:-[blog-editor-h7by.vercel.app]

## 🚀 Features

- ✍️ Create, edit, and publish blog posts
- 📝 Rich text editor using React Quill
- 💾 Auto-save draft every 5 seconds of inactivity
- 📑 Manage published and draft blogs
- 🔐 JWT authentication (login & register)
- 🔒 Protected routes for editor and blog list
- 🎨 Styled using Tailwind CSS

---

## 🧱 Tech Stack

### Frontend:
- React + Vite
- React Router
- React Quill
- React Hot Toast
- Tailwind CSS

### Backend:
- Node.js + Express
- MongoDB + Mongoose
- JWT + Bcrypt for authentication
- CORS & dotenv

---

## 📁 Project Structure

```
frontend/
├── components/
│   └── BlogEditor.jsx
│   └── ProtectedRoute.jsx
├── pages/
│   └── BlogsPage.jsx
│   └── EditorPage.jsx
│   └── LoginPage.jsx
│   └── RegisterPage.jsx
├── api/
│   └── blogService.js
│   └── authService.js
├── App.jsx
├── main.jsx

backend/
├── models/
│   └── Blog.js
│   └── User.js
├── routes/
│   └── blogs.js
│   └── auth.js
├── middleware/
│   └── auth.js
├── server.js
├── .env
```

---

## ⚙️ Getting Started

### Backend
```bash
cd backend
npm install
# Set up .env file with:
# MONGO_URI=<your_mongo_db_uri>
# JWT_SECRET=your_secret_key
node server.js
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Vite URL (default):
```
http://localhost:5173
```

### Backend URL (default):
```
http://localhost:5000
```

---

## 🔐 API Endpoints

| Method | Endpoint                | Description             |
|--------|--------------------------|-------------------------|
| POST   | `/api/blogs/save-draft` | Save or update draft    |
| POST   | `/api/blogs/publish`    | Save and publish blog   |
| GET    | `/api/blogs`            | Get all blogs           |
| GET    | `/api/blogs/:id`        | Get blog by ID          |
| POST   | `/api/auth/register`    | Register user           |
| POST   | `/api/auth/login`       | Login user              |

---

## 🎁 Bonus Features
- Auto-save with debounce
- Visual feedback via toast
- Route protection

---

## 📄 License

This project is intended for evaluation and learning purposes only.
