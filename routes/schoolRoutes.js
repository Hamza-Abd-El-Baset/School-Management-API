const express = require('express');
const router = express.Router();
const schoolController = require('../controllers/schoolController');
const validateObjectId = require('../middlewares/validateObjectId')
const {verifyTokenAndAuthenticate, verifySuperAdmin} = require('../middlewares/authMiddleware')

// Define routes for CRUD operations related to schools
router.route('/')
.post(verifyTokenAndAuthenticate, verifySuperAdmin, schoolController.createSchool)
.get(verifyTokenAndAuthenticate, verifySuperAdmin, schoolController.getAllSchools)

router.route('/:id')
.get(validateObjectId, verifyTokenAndAuthenticate, verifySuperAdmin, schoolController.getSchoolById)
.put(validateObjectId, verifyTokenAndAuthenticate, verifySuperAdmin, schoolController.updateSchool)
.delete(validateObjectId, verifyTokenAndAuthenticate, verifySuperAdmin, schoolController.deleteSchool)


module.exports = router;
