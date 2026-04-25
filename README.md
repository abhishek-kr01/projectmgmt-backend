# 🚀 projectmgmt Backend

A scalable **Node.js + Express** backend for a project management system with authentication, role-based access control, and task management.

---

## ⚠️ Project Status

🚧 Work in Progress

* ✅ Authentication system completed
* ✅ Project management module completed
* ✅ Task & Subtask module implemented
* ⏳ Improvements & notes features in progress

---

## ✨ Features

### 🔐 Authentication

* JWT Authentication (Access + Refresh Tokens)
* User Registration & Login
* Email Verification (Mailtrap)
* Forgot & Reset Password
* Change Password
* Protected Routes

---

### 📁 Project Management

* Create, update, delete projects
* Get all projects for logged-in user
* Add/remove project members
* Update member roles

---

### 🛂 Role-Based Access Control (RBAC)

* Admin
* Project Admin
* Member
* Permission-based route protection

---

### ✅ Task Management

* Create, update, delete tasks
* Assign tasks to users
* Task status tracking (todo, in-progress, done)
* File attachments support

---

### 🔹 Subtask Management

* Create, update, delete subtasks
* Mark subtasks as completed

---

## 🧱 Tech Stack

* Node.js
* Express.js
* MongoDB + Mongoose
* JWT (Authentication)
* Nodemailer + Mailtrap
* Multer (File Uploads)
* Express Validator

---

## 📡 API Base URL

```
http://localhost:8000/api/v1
```

---

## 🔑 Auth Routes

* POST `/auth/register`
* POST `/auth/login`
* POST `/auth/logout`
* GET `/auth/current-user`
* POST `/auth/change-password`
* POST `/auth/refresh-token`
* GET `/auth/verify-email/:token`
* POST `/auth/forgot-password`
* POST `/auth/reset-password/:token`
* POST `/auth/resend-email-verification`

---

## 📁 Project Routes

* GET `/projects`
* POST `/projects`
* GET `/projects/:projectId`
* PUT `/projects/:projectId`
* DELETE `/projects/:projectId`

### Members

* GET `/projects/:projectId/members`
* POST `/projects/:projectId/members`
* PUT `/projects/:projectId/members/:userId`
* DELETE `/projects/:projectId/members/:userId`

---

## 🧩 Task Routes

* GET `/tasks/:projectId`
* POST `/tasks/:projectId`
* GET `/tasks/:projectId/t/:taskId`
* PUT `/tasks/:projectId/t/:taskId`
* DELETE `/tasks/:projectId/t/:taskId`

### Subtasks

* POST `/tasks/:projectId/t/:taskId/subtasks`
* PUT `/tasks/:projectId/st/:subTaskId`
* DELETE `/tasks/:projectId/st/:subTaskId`

---

## 🛠️ Setup Instructions

```bash
git clone <your-repo-url>
cd projectmgmt-backend
npm install
npm run dev
```

---

## 🔐 Environment Variables

```
PORT=8000
MONGO_URI=
ACCESS_TOKEN_SECRET=
REFRESH_TOKEN_SECRET=

MAILTRAP_SMTP_HOST=
MAILTRAP_SMTP_PORT=
MAILTRAP_SMTP_USER=
MAILTRAP_SMTP_PASS=
```

---

## 📂 Project Structure

```
src/
 ├── controllers/
 ├── models/
 ├── routes/
 ├── middlewares/
 ├── validators/
 ├── utils/
```

---

## 🧠 Concepts Implemented

* Authentication vs Authorization
* JWT (Access + Refresh Tokens)
* RBAC (Role-Based Access Control)
* REST API Design
* Modular Backend Architecture

---

## 👨‍💻 Author

**Abhishek Kumar**

---

⭐ If you found this helpful, consider giving it a star!
