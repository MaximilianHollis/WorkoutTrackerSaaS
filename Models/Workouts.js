const mongoose = require('mongoose');

const WorkoutSchema = new mongoose.Schema({
    someting: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Workout', WorkoutSchema);