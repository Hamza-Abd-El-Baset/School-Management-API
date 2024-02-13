const express = require('express');
const router = express.Router();
const classroomController = require('../controllers/classroomController');

// Define routes for CRUD operations related to classrooms
router.post('/', classroomController.createClassroom);
router.get('/', classroomController.getAllClassrooms);
router.get('/:id', classroomController.getClassroomById);
router.put('/:id', classroomController.updateClassroom);
router.delete('/:id', classroomController.deleteClassroom);

module.exports = router;
