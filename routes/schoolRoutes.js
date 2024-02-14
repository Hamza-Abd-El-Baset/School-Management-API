const express = require('express');
const router = express.Router();
const schoolController = require('../controllers/schoolController');
const validateObjectId = require('../middlewares/validateObjectId')
const {verifyTokenAndAuthenticate, verifySuperAdmin} = require('../middlewares/authMiddleware')

// Define routes for CRUD operations related to schools
router.route('/')
.all(verifyTokenAndAuthenticate, verifySuperAdmin)
.post(schoolController.createSchool)
.get(schoolController.getAllSchools)

router.route('/:id')
.all(validateObjectId, verifyTokenAndAuthenticate, verifySuperAdmin)
.get(schoolController.getSchoolById)
.put(schoolController.updateSchool)
.delete(schoolController.deleteSchool)


module.exports = router;
