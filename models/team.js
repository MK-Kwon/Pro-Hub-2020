const mongoose = require('mongoose');
const { Schema } = mongoose;

const teamSchema = new Schema({
    _id: {
        type: String,
        unique: true
    },
    numMembers: Number,
    teamDesc: String,
    teamLoc: String,
    image: String
});

const Team = mongoose.model('Team', teamSchema);

module.exports = Team; 