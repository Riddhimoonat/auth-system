# Full Stack Authentication System

A simple full-stack authentication system built using React, Node.js, Express, and MongoDB.  
This project demonstrates JWT-based authentication and protected routes with TanStack Query for fetching server data.

---

## Tech Stack

### Frontend
- React
- React Router
- TanStack Query
- Axios
- Vite

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt

---

## Features

- User registration
- User login with JWT authentication
- Password hashing with bcrypt
- Protected API routes
- Profile page for authenticated users
- Automatic token attachment using Axios interceptors
- Data fetching with TanStack Query

---

## Project Structure
auth-system
│
├── client
│ ├── src
│ │ ├── api
│ │ │ └── axios.js
│ │ │
│ │ ├── pages
│ │ │ ├── Login.jsx
│ │ │ ├── Register.jsx
│ │ │ └── Profile.jsx
│ │ │
│ │ ├── components
│ │ │ └── ProtectedRoute.jsx
│ │ │
│ │ ├── App.jsx
│ │ └── main.jsx
│ │
│ └── package.json
│
├── server
│ ├── src
│ │ ├── config
│ │ │ └── db.js
│ │ │
│ │ ├── models
│ │ │ └── user.model.js
│ │ │
│ │ ├── controllers
│ │ │ ├── auth.controller.js
│ │ │ └── user.controller.js
│ │ │
│ │ ├── routes
│ │ │ ├── auth.routes.js
│ │ │ └── user.routes.js
│ │ │
│ │ ├── middleware
│ │ │ └── auth.middleware.js
│ │ │
│ │ ├── app.js
│ │ └── server.js
│ │
│ └── package.json
│
└── README.md



---

# Authentication Flow
Register
↓
Login
↓
JWT Token generated
↓
Token stored in localStorage
↓
Frontend sends token in Authorization header
↓
Backend verifies token
↓
Protected profile data returned


---

# API Endpoints

### Register User

POST `/api/auth/register`

{
"name": "Riddhi",
"email": "riddhi@email.com
",
"password": "123456"
}


---

### Login User

POST `/api/auth/login`
{
"email": "riddhi@email.com
",
"password": "123456"
}


Response:
{
"token": "JWT_TOKEN"
}


---

### Get User Profile (Protected)

GET `/api/user/profile`

Header required:


Authorization: Bearer JWT_TOKEN

---

# Running the Project

## 1️⃣ Clone Repository



git clone https://github.com/yourusername/auth-system.git

cd auth-system

---

## 2️⃣ Setup Backend
cd server
npm install


Create `.env` file inside **server**:
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key


Start server:
npm run dev


---

## 3️⃣ Setup Frontend

Open a new terminal:
cd client
npm install
npm run dev

Frontend runs on:
http://localhost:5173

Backend runs on:
http://localhost:3000


---

---

# Author

Riddhi Moonat


