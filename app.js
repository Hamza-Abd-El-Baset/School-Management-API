const express = require('express');
const bodyParser = require('body-parser');
const schoolRoutes = require('./routes/schoolRoutes');
const classroomRoutes = require('./routes/classroomRoutes');
const studentRoutes = require('./routes/studentRoutes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/schools', schoolRoutes);
app.use('/api/classrooms', classroomRoutes);
app.use('/api/students', studentRoutes);


// other imports...

// Your middleware and route definitions...

// Error handling middleware
app.use(errorHandler);


module.exports = app
