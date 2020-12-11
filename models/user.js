const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    credits: {
      type: Number,
      default: 0
    },
    username: String,
    name: String,
    email: String,
    image: String,
    location: String,
    skills: Array,
    description: String,
    //Team_id: String
});

const User = mongoose.model('users', userSchema);

module.exports = User; 