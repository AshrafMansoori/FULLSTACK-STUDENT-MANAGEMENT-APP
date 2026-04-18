# MERN Student Management App

A full-stack web application built with the MERN stack (MongoDB, Express.js, React, Node.js) for managing student information.

## Description

This application allows users to add, view, and delete student records. Each student record includes:
- Name
- Age
- Course
- City

The data is stored in a MongoDB database through an Express.js backend API, and the frontend is built with React for a responsive user interface.

## Features

- Add new students with name, age, course, and city
- View all students in a list
- Delete students from the database
- Responsive design for desktop and mobile

## Tech Stack

- **Frontend:** React
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Other:** CORS for cross-origin requests

## Prerequisites

Before running this application, make sure you have the following installed:
- Node.js (v14 or higher)
- MongoDB (running locally on port 27017)
- npm or yarn package manager

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd MERN-Student-App
   ```

2. Install backend dependencies:
   ```
   cd backend
   npm install
   ```

3. Install frontend dependencies:
   ```
   cd ../frontend
   npm install
   ```

## Usage

1. Start MongoDB (if not already running):
   ```
   mongod
   ```

2. Start the backend server:
   ```
   cd backend
   npm start
   ```
   The server will run on http://localhost:5000

3. Start the frontend:
   ```
   cd frontend
   npm start
   ```
   The React app will run on http://localhost:3000

4. Open your browser and navigate to http://localhost:3000 to use the application.

## API Endpoints

- `GET /` - API status check
- `GET /students` - Retrieve all students
- `POST /students` - Add a new student
- `DELETE /students/:id` - Delete a student by ID

## Project Structure

```
MERN-Student-App/
├── backend/
│   ├── package.json
│   └── server.js
└── frontend/
    ├── public/
    ├── src/
    │   ├── App.js
    │   ├── studentform.js
    │   ├── viewStudent.js
    │   └── ...
    └── package.json
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.