const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;

// Middleware function to validate ObjectId
const validateObjectId = (req, res, next) => {
    const { id } = req.params;
    if (!ObjectId.isValid(id)) {
        return next({
            status: 400,
            message: "Invalid id"
        });
    }
    next();
};

module.exports = validateObjectId;

