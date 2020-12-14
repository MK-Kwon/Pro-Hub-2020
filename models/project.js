const mongoose = require('mongoose');
const { Schema } = mongoose;

const projectSchema = new Schema({
    _id: {
        type: String,
        unique: true
    },
    numMembers: Number,
    projectDesc: String,
    projectLoc: String,
    image: String
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;  