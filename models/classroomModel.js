const mongoose = require('mongoose');

const classroomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    capacity: {
        type: Number,
        required: true
    }
});

const Classroom = mongoose.model('Classroom', classroomSchema);

module.exports = Classroom;
