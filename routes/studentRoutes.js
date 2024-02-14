const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');
const validateObjectId = require('../middlewares/validateObjectId');
const { verifyTokenAndAuthenticate } = require('../middlewares/authMiddleware');

// Define routes for CRUD operations related to students
router.route('/')
    .all(verifyTokenAndAuthenticate)
    .post(studentController.createStudent)
    .get(studentController.getAllStudents);

router.route('/:id')
    .all(validateObjectId, verifyTokenAndAuthenticate)
    .get(studentController.getStudentById)
    .put(studentController.updateStudent)
    .delete(studentController.deleteStudent);

module.exports = router;
