const Student = require('../models/studentModel');
const validateObjectId = require('../middlewares/validateObjectId');

// Controller logic for CRUD operations related to students

// Create a new student
exports.createStudent = async (req, res, next) => {
    const { name, age, grade, schoolId } = req.body;
    try {
        // Validate the schoolId
        validateObjectId(req, res, () => {});

        const newStudent = await Student.create({ name, age, grade, school: schoolId });
        res.status(201).json({ success: true, data: newStudent });
    } catch (error) {
        next(error); // Pass the error to the error handling middleware
    }
};

// Get all students
exports.getAllStudents = async (req, res, next) => {
    try {
        const students = await Student.find();
        res.status(200).json({ success: true, data: students });
    } catch (error) {
        next(error); // Pass the error to the error handling middleware
    }
};

// Get a single student by ID
exports.getStudentById = async (req, res, next) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) {
            return res.status(404).json({ success: false, message: 'Student not found' });
        }
        res.status(200).json({ success: true, data: student });
    } catch (error) {
        next(error); // Pass the error to the error handling middleware
    }
};

// Update a student by ID
exports.updateStudent = async (req, res, next) => {
    const { name, age, grade, schoolId } = req.body;
    try {
        // Validate the schoolId
        validateObjectId(req, res, () => {});

        const student = await Student.findByIdAndUpdate(req.params.id, { name, age, grade, school: schoolId }, { new: true });
        if (!student) {
            return res.status(404).json({ success: false, message: 'Student not found' });
        }
        res.status(200).json({ success: true, data: student });
    } catch (error) {
        next(error); // Pass the error to the error handling middleware
    }
};

// Delete a student by ID
exports.deleteStudent = async (req, res, next) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id);
        if (!student) {
            return res.status(404).json({ success: false, message: 'Student not found' });
        }
        res.status(204).json({ success: true, data: null });
    } catch (error) {
        next(error); // Pass the error to the error handling middleware
    }
};
