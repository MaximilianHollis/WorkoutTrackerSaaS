const mongoose = require('mongoose');

const WorkoutSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: false
    },
});

module.exports = mongoose.model('Workout', WorkoutSchema);