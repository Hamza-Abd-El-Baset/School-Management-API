const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Joi = require('joi');

const adminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    },
    isSuperAdmin: {
        type: Boolean,
        default: false,
    },
});

// Hash password before saving to the database
adminSchema.pre('save', async function(next) {
    const admin = this;
    if (!admin.isModified('password')) return next();

    const salt = await bcrypt.genSalt(10);
    admin.password = await bcrypt.hash(admin.password, salt);
    next();
});

// Method to compare passwords
adminSchema.methods.comparePassword = async function(password) {
    return bcrypt.compare(password, this.password);
};

const Admin = mongoose.model('Admin', adminSchema);

// Joi schema for validation
const adminValidationSchema = Joi.object({
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
    isSuperAdmin: Joi.boolean().default(false),
});

module.exports = Admin;

