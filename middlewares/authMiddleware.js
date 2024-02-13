const jwt = require('jsonwebtoken');

// Middleware function to verify if user is logged in and authenticate
exports.verifyTokenAndAuthenticate = (req, res, next) => {
    if (req.headers.authorization) {
        const token = req.headers.authorization.split(" ")[1];
        try {
            const decodedPayload = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decodedPayload;
            next();
        } catch (err) {
            next({
                status: 401,
                message: "Invalid token, access denied"
            });
        }
    } else {
        next({
            status: 401,
            message: "No token provided, access denied"
        });
    }
};

// Middleware function to verify if user is an admin
exports.verifyAdmin = (req, res, next) => {
    const { isAdmin } = req.user;
    if (isAdmin) {
        next();
    } else {
        next({
            status: 403,
            message: "Not allowed, only admin"
        });
    }
};

// Middleware function to verify if user owns the profile
exports.verifyUserOwnership = (req, res, next) => {
    if (req.user.id === req.params.id) {
        next();
    } else {
        next({
            status: 403,
            message: "Not allowed, only profile owner can modify"
        });
    }
};

// Middleware function to verify if user owns the profile or is an admin
exports.verifyUserOwnershipOrAdmin = (req, res, next) => {
    const { isAdmin } = req.user;
    if (req.user.id === req.params.id || isAdmin) {
        next();
    } else {
        next({
            status: 403,
            message: "Not allowed, only admin or profile owner can delete the profile"
        });
    }
};
