const Admin = require('../models/adminModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Controller logic for CRUD operations related to admins

// Create a new admin
exports.createAdmin = async (req, res, next) => {
    try {
        const { email, password, isSuperAdmin } = req.body;

        // Check if there are any admins in the database
        const adminCount = await Admin.countDocuments();
        if (adminCount > 0 && !req.schoolAdmin.isSuperAdmin) {
            const error = new Error("Not allowed, only super admin can create admins");
            error.status = 403;
            throw error;
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        const newAdmin = await Admin.create({ email, password: hashedPassword, isSuperAdmin });
        res.status(201).json({ success: true, data: newAdmin });
    } catch (error) {
        next(error);
    }
};

// Get all admins
exports.getAllAdmins = async (req, res, next) => {
    try {
        const admins = await Admin.find();
        res.status(200).json({ success: true, data: admins });
    } catch (error) {
        next(error);
    }
};

// Get a single admin by ID
exports.getAdminById = async (req, res, next) => {
    try {
        const admin = await Admin.findById(req.params.id);
        if (!admin) {
            const error = new Error("Admin not found");
            error.status = 404;
            throw error;
        }
        res.status(200).json({ success: true, data: admin });
    } catch (error) {
        next(error);
    }
};

// Update an admin by ID
exports.updateAdmin = async (req, res, next) => {
    try {
        const { email, password, isSuperAdmin } = req.body;

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        const admin = await Admin.findByIdAndUpdate(req.params.id, { email, password: hashedPassword, isSuperAdmin }, { new: true });
        if (!admin) {
            const error = new Error("Admin not found");
            error.status = 404;
            throw error;
        }
        res.status(200).json({ success: true, data: admin });
    } catch (error) {
        next(error);
    }
};

// Delete an admin by ID
exports.deleteAdmin = async (req, res, next) => {
    try {
        const admin = await Admin.findByIdAndDelete(req.params.id);
        if (!admin) {
            const error = new Error("Admin not found");
            error.status = 404;
            throw error;
        }
        res.status(204).json({ success: true, data: null });
    } catch (error) {
        next(error);
    }
};
