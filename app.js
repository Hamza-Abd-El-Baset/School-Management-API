const express = require('express');
const bodyParser = require('body-parser')
const adminRoutes = require('./routes/adminRoutes');
const schoolRoutes = require('./routes/schoolRoutes');
const classroomRoutes = require('./routes/classroomRoutes');
const studentRoutes = require('./routes/studentRoutes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

// Mount the API documentation at the root path
app.use(express.static('public'))

//Middlewares
app.use(bodyParser.json())

// Routes
app.use('/api/admins', adminRoutes);
app.use('/api/schools', schoolRoutes);
app.use('/api/classrooms', classroomRoutes);
app.use('/api/students', studentRoutes);


// ping endpoint
app.get('/ping', (req, res) => {
    res.send('Server is awake!');
});

// Error handling middleware
app.use(errorHandler);


module.exports = app
