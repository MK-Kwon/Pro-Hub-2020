const mongoose = require('mongoose');
const { Schema } = mongoose;

const projectSchema = new Schema({
  project_name: {
    type: String,
    unique: true
  },
  team_lead: String,
  description: String,
  tags: String,
  location: String,
  num_members: Number,
  // image: String,
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: "users"
    }
  ]
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;