const jwt = require('jsonwebtoken');
const config = require('../config/auth');

// Middleware function to verify JWT token and authenticate user
exports.authenticateUser = (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ success: false, message: 'No token provided' });
    }

    try {
        const decoded = jwt.verify(token, config.secret);
        req.user = decoded.user;
        next();
    } catch (error) {
        res.status(401).json({ success: false, message: 'Invalid token' });
    }
};
