
# Task Manager API

A secure and efficient Task Manager API that allows authenticated users to manage their personal tasks. Built using Node.js, Express.js, MySQL, and JWT-based authentication.

## 🚀 Features

- User Registration and Login using JWT
- Secure password hashing using bcrypt
- Authenticated CRUD operations for managing personal tasks
- Error handling and validation
- Swagger/Postman-based API documentation
- Project structured with controllers, routes, models, and middleware
- Environment variable support for secret management

---

## 🔐 Authentication & User Management

- Users can **register** and **login** using JWT-based authentication.
- Passwords are securely stored using **bcrypt hashing**.
- Only **authenticated users** can access and manage tasks.

---

## 📋 Task Management (CRUD)
## Database side
CREATE TABLE task_manager.users (
  id int(11) NOT NULL AUTO_INCREMENT,
  username varchar(255) NOT NULL,
  password varchar(255) NOT NULL,
  created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  PRIMARY KEY (id)
)

CREATE TABLE task_manager.tasks (
  id int(11) NOT NULL AUTO_INCREMENT,
  title varchar(255) NOT NULL,
  description text DEFAULT NULL,
  status enum ('pending', 'in_progress', 'completed') DEFAULT 'pending',
  dueDate date DEFAULT NULL,
  user_id int(11) DEFAULT NULL,
  created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  PRIMARY KEY (id)
)
Each authenticated user can:

- **Create**, **Read**, **Update**, and **Delete** their own tasks.
- Tasks include:
  - `id` (Auto-incremented Primary Key)
  - `title` (String, required)
  - `description` (String, optional)
  - `status` (Enum: `pending`, `in-progress`, `completed`; default: `pending`)
  - `dueDate` (Date, required)
  - `userId` (Foreign Key linked to authenticated user)

> 🔒 **Users cannot access or modify tasks created by other users.**

---

## 📁 Project Structure & Best Practices





- Used `.env` for managing database credentials and JWT secrets.
- Implemented **middleware** for authentication and error handling.

---

## ⚠️ Error Handling & Validation

- Handles:
  - Invalid input
  - Authentication failures
  - Database errors
- Input validation using libraries like `express-validator`.

---

## 📘 API Documentation

- Documented with **Postman Collection**.
- Covers:
  - Request parameters
  - Headers and auth requirements
  - Example payloads and responses

---

## 🌟 Bonus (Optional for Extra Credit)

- Implemented **pagination** for fetching tasks.
- Optional: Allow filtering of tasks by status (`pending`, `completed`, etc.)

---

## 🛠️ Technologies Used

- Node.js
- Express.js
- MySQL
- bcrypt
- JWT
- dotenv
- express-validator
- Swagger / Postman

---

## 🧪 Getting Started

```bash
# Clone the repo
git clone https://github.com/your-repo/task-manager-api.git

# Install dependencies
npm install

# Setup .env file
cp .env.example .env

# Run server
npm run dev


