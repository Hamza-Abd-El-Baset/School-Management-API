const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const { verifySuperAdmin } = require('../middlewares/authMiddleware');
const validateObjectId = require('../middlewares/validateObjectId');

// Define routes for CRUD operations related to admins
router.route('/')
    .post(adminController.createAdmin)
    .get(verifyTokenAndAuthenticate, verifySuperAdmin, adminController.getAllAdmins);

router.route('/:id')
    .get(verifyTokenAndAuthenticate, verifySuperAdmin, validateObjectId, adminController.getAdminById)
    .put(verifyTokenAndAuthenticate, verifySuperAdmin, validateObjectId, adminController.updateAdmin)
    .delete(verifyTokenAndAuthenticate, verifySuperAdmin, validateObjectId, adminController.deleteAdmin);

module.exports = router;
