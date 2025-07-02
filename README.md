# 📚 Library Management System

A simple and scalable RESTful API for managing library books and borrowing operations. Built with **Node.js**, **TypeScript**, **Express**, and **MongoDB (Mongoose)**.

---

## 📖 Table of Contents

* [📌 Introduction](#📌-introduction)
* [✨ Features](#✨-features)
* [🛠️ Installation](#🛠️-installation)
* [🚀 Usage](#🚀-usage)
* [⚙️ Configuration](#⚙️-configuration)
* [🗂️ Project Structure](#🗂️-project-structure)
* [📜 Scripts](#📜-scripts)
* [📦 Dependencies](#📦-dependencies)
* [📡 API Endpoints (Planned)](#📡-api-endpoints-planned)
* [🧩 Troubleshooting](#🧩-troubleshooting)
* [👥 Contributors](#👥-contributors)
* [📝 License](#📝-license)

---

## 📌 Introduction

The **Library Management System** backend is a RESTful API designed to handle book inventory, member registration, and lending operations. It uses **Express.js** for the web server, **MongoDB** (via **Mongoose**) for data storage, and is written in **TypeScript** for type safety and maintainability.

---

## ✨ Features

* **TypeScript**-based Express server
* **MongoDB** integration with Mongoose
* **Environment configuration** via `dotenv`
* **ESLint** for linting and code quality
* **Hot-reloading** during development with `ts-node-dev`

---

## 🛠️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/istiak19/Library-Management-backend
cd Library-Management-backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory:

```env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.fnfrn.mongodb.net/libraryDB?retryWrites=true&w=majority&appName=Cluster0
```

> ⚠️ **Important**: Never commit `.env` files to version control.

---

## 🚀 Usage

### Start development server

```bash
npm run dev
```

By default, the server will run at: [http://localhost:5000](http://localhost:5000)

---

## ⚙️ Configuration

| Variable    | Description                          |
| ----------- | ------------------------------------ |
| `PORT`      | Port on which the server will listen |
| `MONGO_URI` | MongoDB connection URI               |

---

## 🗂️ Project Structure

```
Library Management System/
├── src/
│   ├── app.ts            # Express app setup
│   └── server.ts         # Entry point – DB connection & startup
├── .env                  # Environment variables (not committed)
├── .eslintrc             # ESLint configuration
├── package.json
├── tsconfig.json         # TypeScript configuration
└── README.md
```

---

## 📜 Scripts

| Command            | Description                             |
| ------------------ | --------------------------------------- |
| `npm run dev`      | Start server in development mode        |
| `npm run build`    | Compile TypeScript to JavaScript        |
| `npm run lint`     | Run ESLint for code analysis            |
| `npm run lint:fix` | Automatically fix linting issues        |
| `npm run test`     | Placeholder for future test integration |

---

## 📦 Dependencies

### Runtime

* **express** – Web framework
* **mongoose** – MongoDB object modeling
* **dotenv** – Loads environment variables
* **cors** – Enables Cross-Origin Resource Sharing

### Development

* **typescript** – TypeScript support
* **ts-node-dev** – Development server with hot reload
* **eslint** – Linting utility
* **@typescript-eslint/** – ESLint plugins for TypeScript
* **@types/** – Type definitions for TypeScript

---

## 📡 API Endpoints (Planned)

```http
GET    /api/books         - List all books
POST   /api/books         - Add a new book
GET    /api/books/:id     - Get a specific book
PUT    /api/books/:id     - Update a book
DELETE /api/books/:id     - Remove a book
```

> Additional routes for member registration and lending will be added soon.

---

## 🧩 Troubleshooting

| Issue                     | Solution                                                    |
| ------------------------- | ----------------------------------------------------------- |
| MongoDB connection error  | Ensure your `MONGO_URI` is correct and IP access is allowed |
| Port already in use       | Change `PORT` in `.env` or free up the port                 |
| TypeScript compile issues | Ensure all types and interfaces are properly defined        |

---

## 👥 Contributors

* **Istiak Ahamed** – [@istiak19](https://github.com/istiak19)