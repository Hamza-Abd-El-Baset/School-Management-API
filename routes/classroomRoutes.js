const express = require('express');
const router = express.Router();
const classroomController = require('../controllers/classroomController');
const validateObjectId = require('../middlewares/validateObjectId');
const { verifyTokenAndAuthenticate } = require('../middlewares/authMiddleware');

// Define routes for CRUD operations related to classrooms
router.route('/')
    .post(verifyTokenAndAuthenticate, classroomController.createClassroom)
    .get(verifyTokenAndAuthenticate, classroomController.getAllClassrooms);

router.route('/:id')
    .get(validateObjectId, verifyTokenAndAuthenticate, classroomController.getClassroomById)
    .put(validateObjectId, verifyTokenAndAuthenticate, classroomController.updateClassroom)
    .delete(validateObjectId, verifyTokenAndAuthenticate, classroomController.deleteClassroom);

module.exports = router;
