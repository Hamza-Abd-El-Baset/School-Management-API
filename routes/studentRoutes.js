const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');
const validateObjectId = require('../middlewares/validateObjectId');
const { verifyTokenAndAuthenticate } = require('../middlewares/authMiddleware');

// Define routes for CRUD operations related to students
router.route('/')
    .post(verifyTokenAndAuthenticate, studentController.createStudent)
    .get(verifyTokenAndAuthenticate, studentController.getAllStudents);

router.route('/:id')
    .get(validateObjectId, verifyTokenAndAuthenticate, studentController.getStudentById)
    .put(validateObjectId, verifyTokenAndAuthenticate, studentController.updateStudent)
    .delete(validateObjectId, verifyTokenAndAuthenticate, studentController.deleteStudent);

module.exports = router;
