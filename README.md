# 🚀 projectmgmt Backend

A scalable **Node.js + Express** backend for a project management system featuring **JWT authentication**, **role-based access control (RBAC)**, **task & subtask management**, and **email workflows** (verification + password reset).

---

## ✨ Key Features

### 🔐 Authentication & Security

* JWT-based authentication (Access + Refresh Tokens)
* Email verification (token-based)
* Forgot & Reset Password flow
* Secure cookie handling
* Input validation on all endpoints

### 🛂 Authorization (RBAC)

* Role-based access control:

  * **Admin**
  * **Project Admin**
  * **Member**
* Fine-grained permissions on projects, tasks, and notes

### 📁 Project Management

* Create, update, delete projects
* View projects user has access to
* Manage project members
* Assign roles within a project

### ✅ Task & Subtask Management

* Create, update, delete tasks
* Assign tasks to members
* Status tracking: **Todo / In Progress / Done**
* Subtasks with completion tracking

### 📝 Notes

* Project-level notes (Admin-controlled)
* Create, update, delete notes

### 📎 File Uploads

* Attach multiple files to tasks
* Metadata tracking (URL, type, size)

### 📧 Email Workflows

* Email verification
* Resend verification
* Password reset emails
* Mailtrap/Nodemailer integration

---

## 🧱 Tech Stack

* **Node.js**
* **Express.js**
* **MongoDB + Mongoose**
* **JWT (Authentication)**
* **Nodemailer + Mailtrap**
* **Multer (File Uploads)**
* **Express Validator**

---

## 📡 API Base URL

```
http://localhost:8000/api/v1
```

---

## 🔑 Authentication Routes

| Method | Endpoint                          | Description                  |
| ------ | --------------------------------- | ---------------------------- |
| POST   | `/auth/register`                  | Register user                |
| POST   | `/auth/login`                     | Login user                   |
| POST   | `/auth/logout`                    | Logout (protected)           |
| GET    | `/auth/current-user`              | Get current user (protected) |
| POST   | `/auth/change-password`           | Change password (protected)  |
| POST   | `/auth/refresh-token`             | Refresh access token         |
| GET    | `/auth/verify-email/:token`       | Verify email                 |
| POST   | `/auth/forgot-password`           | Request reset                |
| POST   | `/auth/reset-password/:token`     | Reset password               |
| POST   | `/auth/resend-email-verification` | Resend email (protected)     |

---

## 📁 Project Routes

| Method | Endpoint               | Access        |
| ------ | ---------------------- | ------------- |
| GET    | `/projects`            | All members   |
| POST   | `/projects`            | Authenticated |
| GET    | `/projects/:projectId` | Role-based    |
| PUT    | `/projects/:projectId` | Admin only    |
| DELETE | `/projects/:projectId` | Admin only    |

---

## 👥 Member Management

| Method | Endpoint                               |
| ------ | -------------------------------------- |
| GET    | `/projects/:projectId/members`         |
| POST   | `/projects/:projectId/members`         |
| PUT    | `/projects/:projectId/members/:userId` |
| DELETE | `/projects/:projectId/members/:userId` |

---

## 🧩 Task Routes

| Method | Endpoint                      |
| ------ | ----------------------------- |
| GET    | `/tasks/:projectId`           |
| POST   | `/tasks/:projectId`           |
| GET    | `/tasks/:projectId/t/:taskId` |
| PUT    | `/tasks/:projectId/t/:taskId` |
| DELETE | `/tasks/:projectId/t/:taskId` |

---

## 🔹 Subtask Routes

| Method | Endpoint                               |
| ------ | -------------------------------------- |
| POST   | `/tasks/:projectId/t/:taskId/subtasks` |
| PUT    | `/tasks/:projectId/st/:subTaskId`      |
| DELETE | `/tasks/:projectId/st/:subTaskId`      |

---

## 📝 Notes Routes

| Method | Endpoint                      |
| ------ | ----------------------------- |
| GET    | `/notes/:projectId`           |
| POST   | `/notes/:projectId`           |
| GET    | `/notes/:projectId/n/:noteId` |
| PUT    | `/notes/:projectId/n/:noteId` |
| DELETE | `/notes/:projectId/n/:noteId` |

---

## ❤️ Health Check

```
GET /healthcheck
```

---

## 🛠️ Setup Instructions

```bash
git clone https://github.com/abhishek-kr01/projectmgmt-backend
cd projectmgmt-backend
npm install
npm run dev
```

---

## 🔐 Environment Variables

```env
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

## 🧠 Concepts Covered

* Authentication vs Authorization
* JWT (Access + Refresh Token)
* RBAC (Role-Based Access Control)
* REST API design
* Scalable backend architecture

---

## 👨‍💻 Author

**Abhishek Kumar**

---

## 🚀 Future Improvements

* Notifications system
* Activity logs
* Real-time updates (WebSockets)
* Frontend integration (React)

---

⭐ If you like this project, consider giving it a star!
