# inventory-Backend
A RESTful backend API built using Node.js, Express, MongoDB, and JWT authentication for managing inventory items and users. This project demonstrates clean backend architecture, secure authentication, and well-documented APIs using Swagger.
🚀 Features

🔐 User Authentication

Signup & Login using JWT (JSON Web Tokens)

Password hashing with bcrypt

Protected routes using authentication middleware

📦 Inventory Management

Add new items

Update existing items

Get all items

Get item by ID

🧱 Scalable Architecture

MVC pattern (Controllers, Routes, Models, Middleware)

Centralized error handling

Input validation middleware

📄 API Documentation

Swagger UI for interactive API testing

JWT authorization supported inside Swagger

🛠 Tech Stack

Node.js

Express.js

MongoDB & Mongoose

JWT (jsonwebtoken)

bcrypt

Swagger (swagger-jsdoc & swagger-ui-express)

📂 Project Structure
src/
├── controllers/     # Business logic
├── models/          # Mongoose schemas
├── routes/          # API routes
├── middleware/      # Auth, validation, hashing
├── config/          # DB & environment configs
├── swagger.js       # Swagger configuration
├── app.js           # Express app setup
└── server.js        # Server entry point

🔐 Authentication Flow

User registers → password hashed with bcrypt

User logs in → JWT token generated

Token sent in Authorization header

Protected routes validated via middleware

📘 API Documentation

After starting the server, access Swagger UI at:

http://localhost:<PORT>/api-docs


Use the Authorize 🔒 button to pass JWT tokens.

⚙️ Environment Variables

Create a .env file:

PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

▶️ Run the Project
npm install
npm run dev

🎯 Learning Outcomes

REST API design best practices

Middleware-based request handling

JWT-based authentication

MongoDB CRUD operations

API documentation with Swagger
