# 📚 Library Management System

A simple and scalable RESTful API for managing library books and borrowing operations. Built with **Node.js**, **TypeScript**, **Express**, and **MongoDB (Mongoose)**.

---

## 📖 Table of Contents

* [Introduction](#📌-introduction)
* [Features](#✨-features)
* [Installation](#🛠️-installation)
* [Usage](#🚀-usage)
* [Configuration](#⚙️-configuration)
* [Project Structure](#🗂️-project-structure)
* [Scripts](#📜-scripts)
* [Dependencies](#📦-dependencies)
* [API Endpoints](#📡-api-endpoints-optional)
* [Troubleshooting](#🧩-troubleshooting)
* [Contributors](#👥-contributors)
* [License](#📝-license)

---

## 📌 Introduction

This project provides a backend server built with Express and TypeScript to manage a library system, supporting functionalities such as book management, member registration, and lending operations (to be implemented). MongoDB is used for persistent data storage.

---

## ✨ Features

* 📦 Express.js server with full TypeScript support
* 🌱 MongoDB integration via Mongoose
* 🔐 Environment-based configuration using `dotenv`
* 🧹 Linting with ESLint and TypeScript plugins
* 🔁 Hot-reloading for development using `ts-node-dev`

---

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/istiak19/Library-Management-backend
   cd Library-Management-backend
   ```

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

   > ⚠️ **Important**: Never commit `.env` files to version control.

---

## 🚀 Usage

### Run in development mode

```bash
npm run dev
```

Server will be available at `http://localhost:<PORT>` (default: `5000`).

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
│   └── server.ts         # Entry point – DB connection & server startup
├── .env                  # Environment variables (ignored in git)
├── package.json
├── tsconfig.json         # TypeScript configuration
├── .eslintrc             # ESLint rules
└── README.md
```

---

## 📜 Scripts

| Command            | Description                               |
| ------------------ | ----------------------------------------- |
| `npm run dev`      | Run development server with hot-reloading |
| `npm run build`    | Compile TypeScript to JavaScript          |
| `npm run lint`     | Lint codebase using ESLint                |
| `npm run lint:fix` | Auto-fix linting issues                   |
| `npm run test`     | Run test suite (currently placeholder)    |

---

## 📦 Dependencies

### Runtime

* `express` – Web server framework
* `mongoose` – MongoDB object modeling
* `dotenv` – Environment variable management

### Development

* `typescript` – TypeScript support
* `ts-node-dev` – Dev server with auto-restart
* `eslint`, `@typescript-eslint/*` – Code linting and formatting
* `@types/express` – Type definitions for Express

---

## 📡 API Endpoints (optional)

*These are planned or example routes that could be included in your API:*

```http
GET    /api/books         - List all books
POST   /api/books         - Add a new book
GET    /api/books/:id     - Get a specific book
PUT    /api/books/:id     - Update a book
DELETE /api/books/:id     - Remove a book
```

---

## 🧩 Troubleshooting

| Issue                     | Solution                                                             |
| ------------------------- | -------------------------------------------------------------------- |
| MongoDB connection error  | Ensure `MONGO_URI` is correct and the cluster allows your IP address |
| Port already in use       | Change the `PORT` in your `.env` or free up the port                 |
| TypeScript compile issues | Check your types and interfaces are correctly defined                |

---

## 👥 Contributors

* **Istiak Ahamed** – [@istiak19](https://github.com/istiak19)