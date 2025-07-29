# Task Manager API

A simple **RESTful API** built with [NestJS](https://nestjs.com/) for managing tasks.  
It allows you to **create, read, update, and delete (CRUD)** tasks, with validation, error handling, and PostgreSQL database integration.

---

## Features

- Create, read, update, and delete tasks.
- Each task has:
  - `title`
  - `description` (optional)
  - `status` (`pending`, `in-progress`, `done`)
  - `dueDate` (optional)
- Input validation using `class-validator`.
- Centralized error handling with global filters.
- Environment variable configuration (`.env`) for sensitive data.
- Consistent success responses for all API calls.

---

## Tech Stack

- **NestJS** (Node.js framework)
- **TypeORM** (ORM)
- **PostgreSQL** (database)
- **class-validator** (validation)
- **@nestjs/config** (environment variables)

---

## Project Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/task-manager-api.git
cd task-manager-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

Edit `.env` as needed (update database credentials).

---

## Running the Project

### Start the development server

```bash
npm run start:dev
```

Server will start at:  
**http://localhost:3000**

---

## API Endpoints

Base URL: `/tasks`

### **1. Create a Task**

**POST** `/tasks`

Request body:

```json
{
  "title": "Learn NestJS",
  "description": "Practice building APIs",
  "dueDate": "2025-08-01"
}
```

---

### **2. Get All Tasks**

**GET** `/tasks`

---

### **3. Get One Task**

**GET** `/tasks/:id`

---

### **4. Update a Task**

**PATCH** `/tasks/:id`

Request body:

```json
{
  "status": "done"
}
```

---

### **5. Delete a Task**

**DELETE** `/tasks/:id`

---

## `.env.example`

```env
# Server
PORT=3000

# Database (PostgreSQL)
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASS=yourpass
DB_NAME=yourdbname
```

## Error Handling

All errors return consistent JSON responses.

Example: Task not found (`GET /tasks/999`):

```json
{
  "statusCode": 404,
  "message": "Task with ID 999 not found",
  "timestamp": "2025-07-29T10:00:00.000Z"
}
```

Example: Invalid input (`POST /tasks`):

```json
{
  "statusCode": 400,
  "message": ["title must be a string"],
  "timestamp": "2025-07-29T10:05:00.000Z"
}
```
