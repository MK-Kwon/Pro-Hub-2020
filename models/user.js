const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  credits: {
    type: Number,
    default: 0
  },
  github_username: String,
  first_name: String,
  last_name: String,
  email: String,
  photo: String,
  github_photo: String,
  location: String,
  skills: String,
  bio: String,
  followers: Number,
  following: Number,
  repos: Number,
  github_url: String  
});

const User = mongoose.model('users', userSchema);

module.exports = User;