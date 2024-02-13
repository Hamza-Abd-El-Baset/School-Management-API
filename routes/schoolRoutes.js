const express = require('express');
const router = express.Router();
const schoolController = require('../controllers/schoolController');

// Define routes for CRUD operations related to schools
router.post('/', schoolController.createSchool);
router.get('/', schoolController.getAllSchools);
router.get('/:id', schoolController.getSchoolById);
router.put('/:id', schoolController.updateSchool);
router.delete('/:id', schoolController.deleteSchool);

module.exports = router;
