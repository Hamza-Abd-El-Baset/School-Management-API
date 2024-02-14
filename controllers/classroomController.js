const Classroom = require('../models/classroomModel');
const validateObjectId = require('../middlewares/validateObjectId');

// Controller logic for CRUD operations related to classrooms

// Create a new classroom
exports.createClassroom = async (req, res, next) => {
    const { name, capacity, schoolId } = req.body;
    try {
        // Validate the schoolId
        validateObjectId(req, res, () => {});

        const newClassroom = await Classroom.create({ name, capacity, school: schoolId });
        res.status(201).json({ success: true, data: newClassroom });
    } catch (error) {
        next(error); // Pass the error to the error handling middleware
    }
};

// Get all classrooms
exports.getAllClassrooms = async (req, res, next) => {
    try {
        const classrooms = await Classroom.find();
        res.status(200).json({ success: true, data: classrooms });
    } catch (error) {
        next(error); // Pass the error to the error handling middleware
    }
};

// Get a single classroom by ID
exports.getClassroomById = async (req, res, next) => {
    try {
        const classroom = await Classroom.findById(req.params.id);
        if (!classroom) {
            return res.status(404).json({ success: false, message: 'Classroom not found' });
        }
        res.status(200).json({ success: true, data: classroom });
    } catch (error) {
        next(error); // Pass the error to the error handling middleware
    }
};

// Update a classroom by ID
exports.updateClassroom = async (req, res, next) => {
    const { name, capacity, schoolId } = req.body;
    try {
        // Validate the schoolId
        validateObjectId(req, res, () => {});

        const classroom = await Classroom.findByIdAndUpdate(req.params.id, { name, capacity, school: schoolId }, { new: true });
        if (!classroom) {
            return res.status(404).json({ success: false, message: 'Classroom not found' });
        }
        res.status(200).json({ success: true, data: classroom });
    } catch (error) {
        next(error); // Pass the error to the error handling middleware
    }
};

// Delete a classroom by ID
exports.deleteClassroom = async (req, res, next) => {
    try {
        const classroom = await Classroom.findByIdAndDelete(req.params.id);
        if (!classroom) {
            return res.status(404).json({ success: false, message: 'Classroom not found' });
        }
        res.status(204).json({ success: true, data: null });
    } catch (error) {
        next(error); // Pass the error to the error handling middleware
    }
};
