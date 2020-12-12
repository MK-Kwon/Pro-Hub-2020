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
    first_name: "Jessica",
    last_name: "Thomson",
    email: "j.thomson@user.com",
    photo: "img1",
    location: "NSW",
    skills: ["React", "NodeJS", "AWS", "Photoshop", "Illustrator", "JavaScript"],
    description: "Web Developer",
    //Team_id: "Dreamteam"
  },
  {
    googleId: "432994",
    credits: 20,
    username: "user2",
    first_name: "Mohammed",
    last_name:"Patel",
    email: "m.patel@user.com",
    photo: "img2",
    location: "QLD",
    skills: ["Dot Net Developing", "Application Developing"],
    description: "Software Developer",
    //Team_id: "Dreamteam"
  },
  {
    googleId: "932301",
    credits: 20,
    username: "user3",
    first_name: "James",
    last_name: "Jean",
    email: "j.jean@user.com",
    photo: "img3",
    location: "WA",
    skills: ["Full Stack Developing", "Graphic Design"],
    description: "Software Developer",
    //Team_id: "MyTeam"
  },
  {
    googleId: "123994",
    credits: 20,
    username: "user4",
    first_name: "Kate",
    last_name: "Kim",
    email: "k.kate@user.com",
    photo: "img4",
    location: "SA",
    skills: ["NodeJS", "JavaScript", ".Net Developing"],
    description: "Web Developer",
    //Team_id: "MyTeam"
  }
]


const teamSeed = [
  {
    name: "Dreamteam",
    numMembers: 3,
    teamDesc: "the dream team",
    teamLoc: "Australia",
    image: "img1",
    users: []
  },
  {
    name: "MyTeam",
    numMembers: 4,
    teamDesc: "my team",
    teamLoc: "Australia",
    image: "img2",
    users: []
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