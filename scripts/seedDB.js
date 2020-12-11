const mongoose = require("mongoose");
const db = require("../models");
const keys = require("../config/keys");

// This file empties the User and Team collections and inserts the data below

mongoose.connect(keys.mongoURI || "mongodb://localhost/prohub");

const userSeed = [
  {
    googleId: "398230",
    credits: 20,
    username: "user1",
    name: "Jessica Thomson",
    email: "j.thomson@user.com",
    image: "img1",
    location: "NSW",
    skills: ["React", "NodeJS", "AWS", "Photoshop", "Illustrator", "JavaScript"],
    description: "Web Developer",
    Team_id: "Dreamteam"
  },
  {
    googleId: "432994",
    credits: 20,
    username: "user2",
    name: "Mohammed Patel",
    email: "m.patel@user.com",
    image: "img2",
    location: "QLD",
    skills: ["Dot Net Developing", "Application Developing"],
    description: "Software Developer",
    Team_id: "Dreamteam"
  },
  {
    googleId: "932301",
    credits: 20,
    username: "user3",
    name: "James Jean",
    email: "j.jean@user.com",
    image: "img3",
    location: "WA",
    skills: ["Full Stack Developing", "Graphic Design"],
    description: "Software Developer",
    Team_id: "MyTeam"
  },
  {
    googleId: "123994",
    credits: 20,
    username: "user4",
    name: "Kate Kim",
    email: "k.kate@user.com",
    image: "img4",
    location: "SA",
    skills: ["NodeJS", "JavaScript", ".Net Developing"],
    description: "Web Developer",
    Team_id: "MyTeam"
  }
]


const teamSeed = [
  {
    _id: "Dreamteam",
    numMembers: 3,
    teamDesc: "the dream team",
    teamLoc: "Australia",
    image: "img1"
  },
  {
    _id: "MyTeam",
    numMembers: 4,
    teamDesc: "my team",
    teamLoc: "Australia",
    image: "img2"
  }
]

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Team
  .remove({})
  .then(() => db.Team.collection.insertMany(teamSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });