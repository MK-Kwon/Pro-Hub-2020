const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    username: String,
    name: String,
    email: String,
    image: String,
    location: String,
    skills: Array,
    description: String,
    Team_id: String
});

const User = mongoose.model('User', userSchema);

module.exports = User; 