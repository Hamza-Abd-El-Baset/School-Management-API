const School = require('../models/schoolModel');

// Controller logic for CRUD operations related to schools

// Create a new school
exports.createSchool = async (req, res, next) => {
    const { name, location } = req.body;
    try {
        const newSchool = await School.create({ name, location });
        res.status(201).json({ success: true, data: newSchool });
    } catch (error) {
        next(error); // Pass the error to the error handling middleware
    }
};

// Get all schools
exports.getAllSchools = async (req, res, next) => {
    try {
        const schools = await School.find();
        res.status(200).json({ success: true, data: schools });
    } catch (error) {
        next(error); // Pass the error to the error handling middleware
    }
};

// Get a single school by ID
exports.getSchoolById = async (req, res, next) => {
    try {
        const school = await School.findById(req.params.id);
        if (!school) {
            return res.status(404).json({ success: false, message: 'School not found' });
        }
        res.status(200).json({ success: true, data: school });
    } catch (error) {
        next(error); // Pass the error to the error handling middleware
    }
};

// Update a school by ID
exports.updateSchool = async (req, res, next) => {
    const { name, location } = req.body;
    try {
        const school = await School.findByIdAndUpdate(req.params.id, { name, location }, { new: true });
        if (!school) {
            return res.status(404).json({ success: false, message: 'School not found' });
        }
        res.status(200).json({ success: true, data: school });
    } catch (error) {
        next(error); // Pass the error to the error handling middleware
    }
};

// Delete a school by ID
exports.deleteSchool = async (req, res, next) => {
    try {
        const school = await School.findByIdAndDelete(req.params.id);
        if (!school) {
            return res.status(404).json({ success: false, message: 'School not found' });
        }
        res.status(204).json({ success: true, data: null });
    } catch (error) {
        next(error); // Pass the error to the error handling middleware
    }
};
