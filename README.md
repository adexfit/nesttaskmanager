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
git clone
cd task-manager-api

```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure Environment Variables
Copy .env.example to .env:
Edit .env as needed (update database credentials).

### 4. Start the development server
```bash
npm run start:dev
```

Server will start at:
http://localhost:3000