
const mongoose = require('mongoose');

const RegistrationSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true,
    },
    mobileNumber: {
        type: String,
        required: true,
        match: /^\d{10}$/, // Validates 10-digit numbers
    },
    skill: {
        type: String,
        trim: true,
    },
    suggestion: {
        type: String,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Registration', RegistrationSchema);
