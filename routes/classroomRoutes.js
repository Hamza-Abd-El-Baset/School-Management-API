const express = require('express');
const router = express.Router();
const classroomController = require('../controllers/classroomController');
const validateObjectId = require('../middlewares/validateObjectId');
const { verifyTokenAndAuthenticate } = require('../middlewares/authMiddleware');

// Define routes for CRUD operations related to classrooms
router.route('/')
    .all(verifyTokenAndAuthenticate)
    .post(classroomController.createClassroom)
    .get(classroomController.getAllClassrooms);

router.route('/:id')
    .all(validateObjectId, verifyTokenAndAuthenticate)
    .get(classroomController.getClassroomById)
    .put(classroomController.updateClassroom)
    .delete(classroomController.deleteClassroom);

module.exports = router;
