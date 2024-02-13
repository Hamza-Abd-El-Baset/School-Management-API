const Classroom = require('../models/classroomModel');

// Controller logic for CRUD operations related to classrooms

// Create a new classroom
exports.createClassroom = async (req, res) => {
    try {
        const { name, capacity } = req.body;
        const newClassroom = await Classroom.create({ name, capacity });
        res.status(201).json({ success: true, data: newClassroom });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// Get all classrooms
exports.getAllClassrooms = async (req, res) => {
    try {
        const classrooms = await Classroom.find();
        res.status(200).json({ success: true, data: classrooms });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get a single classroom by ID
exports.getClassroomById = async (req, res) => {
    try {
        const classroom = await Classroom.findById(req.params.id);
        if (!classroom) {
            return res.status(404).json({ success: false, message: 'Classroom not found' });
        }
        res.status(200).json({ success: true, data: classroom });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Update a classroom by ID
exports.updateClassroom = async (req, res) => {
    try {
        const { name, capacity } = req.body;
        const classroom = await Classroom.findByIdAndUpdate(req.params.id, { name, capacity }, { new: true });
        if (!classroom) {
            return res.status(404).json({ success: false, message: 'Classroom not found' });
        }
        res.status(200).json({ success: true, data: classroom });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Delete a classroom by ID
exports.deleteClassroom = async (req, res) => {
    try {
        const classroom = await Classroom.findByIdAndDelete(req.params.id);
        if (!classroom) {
            return res.status(404).json({ success: false, message: 'Classroom not found' });
        }
        res.status(204).json({ success: true, data: null });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
