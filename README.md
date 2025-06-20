# 📚 Library Management System

A simple and scalable RESTful API for managing library books and borrowing operations. Built with **Node.js**, **TypeScript**, **Express**, and **MongoDB (Mongoose)**.

---

## 📖 Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Troubleshooting](#troubleshooting)
- [Contributors](#contributors)
- [License](#license)

---

## 📌 Introduction

This project is a backend server built with Express and TypeScript to manage a library system, including features like book handling, member registration, and lending operations (presumably, if added in the future). It uses MongoDB for data persistence.

---

## ✨ Features

- Express.js server with TypeScript support
- MongoDB connection via Mongoose
- Environment-based configuration using dotenv
- Linting with ESLint and TypeScript plugin
- Hot-reloading for development with ts-node-dev

---

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/istiak19/Library-Management-backend
   cd Library-Management-backend
````

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:

   ```env
   PORT=5000
   MONGO_URI=mongodb+srv://<username>:<password>@cluster0.fnfrn.mongodb.net/libraryDB?retryWrites=true&w=majority&appName=Cluster0
   ```

   > ⚠️ **Do not commit your `.env` file to version control.**

---

## 🚀 Usage

### Run in development mode:

```bash
npm run dev
```

The server will start on the port defined in `.env`, e.g., `http://localhost:5000`.

---

## ⚙️ Configuration

| Variable    | Description                     |
| ----------- | ------------------------------- |
| `PORT`      | Port number for the application |
| `MONGO_URI` | MongoDB connection string       |

---

## 🗂️ Project Structure

```
Library Management System/
├── src/
│   ├── app.ts            # Express app setup
│   └── server.ts         # Entry point - DB connection and server startup
├── .env                  # Environment variables
├── package.json
├── tsconfig.json
└── .eslintrc             # ESLint configuration (if included)
```

---

## 📜 Scripts

| Script     | Description                      |
| ---------- | -------------------------------- |
| `dev`      | Run the server with hot-reload   |
| `build`    | Compile TypeScript to JavaScript |
| `lint`     | Lint the codebase                |
| `lint:fix` | Lint and auto-fix issues         |
| `test`     | Placeholder for running tests    |

---

## 📦 Dependencies

### Runtime

* `express`: Web framework
* `mongoose`: MongoDB ODM
* `dotenv`: Environment variable loader

### Dev

* `typescript`: TypeScript compiler
* `ts-node-dev`: Development server with hot-reloading
* `eslint`, `@typescript-eslint/*`: Code linting and style checking
* `@types/express`: Type definitions for Express

---

## 🧩 Troubleshooting

* **MongoDB connection issues**: Ensure your Mongo URI is correct and network access is allowed for your IP.
* **TypeScript errors**: Check that all files have proper types and interfaces.
* **Port in use**: Make sure the `PORT` is not already in use or change it in `.env`.

---

## 👥 Contributors

* **Istiak Ahamed**

## 📡 API Endpoints (optional)

*You can list your REST API endpoints here once defined, e.g.:*

```http
GET    /api/books        - List all books
POST   /api/books        - Add a new book
GET    /api/books/:id    - Get details of a specific book
PUT    /api/books/:id    - Update a book
DELETE /api/books/:id    - Delete a book
