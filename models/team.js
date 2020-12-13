const mongoose = require('mongoose');
const { Schema } = mongoose;

const teamSchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    image: String,
    users: [
        {
            type: Schema.Types.ObjectId,
            ref: "users"
        }
    ]
});

const Team = mongoose.model('Team', teamSchema);

module.exports = Team; 