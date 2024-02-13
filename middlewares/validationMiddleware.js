// Middleware functions for input validation

// Example function to validate request body for creating a new school
exports.validateSchool = (req, res, next) => {
    const { name, location } = req.body;

    if (!name || !location) {
        return res.status(400).json({ success: false, message: 'Name and location are required' });
    }

    // Additional validation logic can be added here

    next();
};

// Example function to validate request body for creating a new classroom
exports.validateClassroom = (req, res, next) => {
    const { name, capacity } = req.body;

    if (!name || !capacity) {
        return res.status(400).json({ success: false, message: 'Name and capacity are required' });
    }

    // Additional validation logic can be added here

    next();
};

// Example function to validate request body for creating a new student
exports.validateStudent = (req, res, next) => {
    const { name, age, grade } = req.body;

    if (!name || !age || !grade) {
        return res.status(400).json({ success: false, message: 'Name, age, and grade are required' });
    }

    // Additional validation logic can be added here

    next();
};
