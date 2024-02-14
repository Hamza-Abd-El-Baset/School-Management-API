# School Management API

This repository contains the backend component of a school management application developed using Node.js, Express.js, and MongoDB. The backend provides the necessary APIs and functionality to manage schools, administrators, students, and classrooms.

## Features
- **Admin Management**: CRUD operations for managing administrators.
- **Student Management**: CRUD operations for managing students.
- **Classroom Management**: CRUD operations for managing classrooms.
- **School Management**: CRUD operations for managing schools.
- **Authentication**: User authentication and authorization mechanisms.
- **Error Handling**: Custom error handling middleware to manage errors gracefully.

## Getting Started

1. **Clone the Repository:** 
   Clone this repository to your local machine using the following command:

   ```shell
   git clone https://github.com/Hamza-Abd-El-Baset/School-Management-API.git
   ```

2. **Install Dependencies:**
   Install project dependencies using npm:

   ```shell
   npm install
   ```

3. **Set Up Environment Variables:**
   Create a `.env` file in the project's root directory and define the necessary environment variables. Here is a list of the required variables:

   - `PORT`: The port on which the server will listen.
   - `MONGO_URI`: The URI for your MongoDB database.
   - `NODE_ENV`: The environment mode (e.g., 'development' or 'production').
   - `JWT_SECRET`: The secret key used for JSON Web Token (JWT) authentication.

   Use this format in your `.env` file:

   ```shell
   PORT=3000
   MONGO_URI=mongodb://localhost/mydatabase
   NODE_ENV=development
   JWT_SECRET=your-secret-key
   ```

4. **Start the Server:**
   Run the following command to start the server:

   ```shell
   npm start
   ```

   The API will be available at `http://localhost:3000`.

## Usage

Detailed instructions on how to use this backend API can be found in the [API Documentation](https://documenter.getpostman.com/view/28144875/2sA2r556FJ).
