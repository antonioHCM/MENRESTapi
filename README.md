MENRESTapi

🚀 Project Overview

MENRESTapi is a RESTful API built using the MEN stack (MongoDB, Express.js, and Node.js). This API provides CRUD operations for managing resources and includes validation, structured routing, and comprehensive API documentation using Swagger.

📁 Project Structure

MENRESTapi/
│-- models/           # Mongoose schemas and data models
│-- routes/           # API route handlers
│-- server.js         # Main entry point (Express server & MongoDB connection)
│-- swagger.yaml      # API documentation (Swagger/OpenAPI)
│-- validation.js     # Data validation logic
│-- .env              # Environment variables
│-- package.json      # Project dependencies & scripts

✨ Features

✅ CRUD Operations - Create, Read, Update, Delete resources efficiently.✅ MongoDB Integration - Uses Mongoose for seamless database interaction.✅ Data Validation - Ensures integrity using Joi validation.✅ API Documentation - Access Swagger UI at /api-docs for an interactive API guide.✅ Modular & Scalable - Well-structured project architecture for easy scalability.

🛠 Tech Stack

Node.js - JavaScript runtime

Express.js - Web framework for Node.js

MongoDB - NoSQL database

Mongoose - ODM for MongoDB

Swagger - API documentation tool

Joi - Request validation

🔧 Installation & Setup

1️⃣ Clone the Repository

git clone https://github.com/antonioHCM/MENRESTapi.git
cd MENRESTapi

2️⃣ Install Dependencies

npm install

3️⃣ Configure Environment Variables

Create a .env file in the root directory and add:

PORT=3000
MONGODB_URI=mongodb://localhost:27017/your_database_name

4️⃣ Start the Server

npm start

5️⃣ Access the API

Base URL: http://localhost:3000

Swagger API Docs: http://localhost:3000/api-docs

📝 API Endpoints (Example)

Method

Endpoint

Description

GET

/users

Fetch all users

POST

/users

Create a new user

GET

/users/:id

Get user by ID

PUT

/users/:id

Update user by ID

DELETE

/users/:id

Delete user by ID

✅ Contribution Guidelines

Fork the repository & create a new branch.

Make your changes & commit with a clear message.

Submit a pull request (PR).

📜 License

This project is licensed under the MIT License.

💡 Happy Coding! 🚀

