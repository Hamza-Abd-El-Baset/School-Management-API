const School = require('../models/schoolModel');

// Controller logic for CRUD operations related to schools

// Create a new school
exports.createSchool = async (req, res) => {
    try {
        const { name, location } = req.body;
        const newSchool = await School.create({ name, location });
        res.status(201).json({ success: true, data: newSchool });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// Get all schools
exports.getAllSchools = async (req, res) => {
    try {
        const schools = await School.find();
        res.status(200).json({ success: true, data: schools });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get a single school by ID
exports.getSchoolById = async (req, res) => {
    try {
        const school = await School.findById(req.params.id);
        if (!school) {
            return res.status(404).json({ success: false, message: 'School not found' });
        }
        res.status(200).json({ success: true, data: school });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Update a school by ID
exports.updateSchool = async (req, res) => {
    try {
        const { name, location } = req.body;
        const school = await School.findByIdAndUpdate(req.params.id, { name, location }, { new: true });
        if (!school) {
            return res.status(404).json({ success: false, message: 'School not found' });
        }
        res.status(200).json({ success: true, data: school });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Delete a school by ID
exports.deleteSchool = async (req, res) => {
    try {
        const school = await School.findByIdAndDelete(req.params.id);
        if (!school) {
            return res.status(404).json({ success: false, message: 'School not found' });
        }
        res.status(204).json({ success: true, data: null });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
