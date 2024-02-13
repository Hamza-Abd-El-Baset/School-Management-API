const jwt = require('jsonwebtoken');

// Middleware function to verify if token is provided and authenticate admin
exports.verifyTokenAndAuthenticate = (req, res, next) => {
    if (req.headers.authorization) {
        const token = req.headers.authorization.split(" ")[1];
        try {
            const decodedPayload = jwt.verify(token, process.env.JWT_SECRET);
            req.admin = decodedPayload;
            next();
        } catch (err) {
            return next({
                status: 401,
                message: "Invalid token, access denied"
            });
        }
    } else {
        return next({
            status: 401,
            message: "No token provided, access denied"
        });
    }
};

// Middleware function to verify if admin is a super admin
exports.verifySuperAdmin = (req, res, next) => {
    const { isSuperAdmin } = req.admin;
    if (isSuperAdmin) {
        next();
    } else {
        return next({
            status: 403,
            message: "Not allowed, only super admin"
        });
    }
};

// Middleware function to verify if admin owns the account
exports.verifyAccountOwnership = (req, res, next) => {
    if (req.admin._id.toString() === req.params.id) {
        next();
    } else {
        return next({
            status: 403,
            message: "Not allowed, only account owner can modify"
        });
    }
};

// Middleware function to verify if admin owns the account or is a super admin
exports.verifyAccountOwnershipOrSuperAdmin = (req, res, next) => {
    const { isSuperAdmin } = req.admin;
    if (req.admin._id.toString() === req.params.id || isSuperAdmin) {
        next();
    } else {
        return next({
            status: 403,
            message: "Not allowed, only super admin or account owner can delete the account"
        });
    }
};
