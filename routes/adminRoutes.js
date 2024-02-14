const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const { verifyTokenAndAuthenticate, verifySuperAdmin } = require('../middlewares/authMiddleware');
const validateObjectId = require('../middlewares/validateObjectId');

// Define routes for CRUD operations related to admins
router.route('/')
    .post(adminController.createAdmin)
    .get(verifyTokenAndAuthenticate, verifySuperAdmin, adminController.getAllAdmins);

router.route('/:id')
    .all(verifyTokenAndAuthenticate, verifySuperAdmin, validateObjectId)
    .get(adminController.getAdminById)
    .put(adminController.updateAdmin)
    .delete(adminController.deleteAdmin);

router.route('/login')
    .post(adminController.login);

module.exports = router;



