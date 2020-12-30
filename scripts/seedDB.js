const mongoose = require("mongoose");
// const { Schema } = mongoose;
const db = require("../models");
const keys = require("../config/keys");
// This file empties the Team and Team collections and inserts the data below
// mongoose.connect(keys.mongoURI || "mongodb://localhost/colabdb");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/pro-hub-2020", { useNewUrlParser: true });


const userSeed = [
  {
    googleId: "398230",
    credits: 20,
    first_name: "Jessica",
    last_name: "Thomson",
    email: "j.thomson@user.com",
    photo: "img1",
    location: "NSW",
    skills: "React, NodeJS, AWS, Photoshop, Illustrator, JavaScript",
    bio: "Web Developer",
    //Team_id: "Dreamteam"
  },
  {
    googleId: "432994",
    credits: 20,
    first_name: "Mohammed",
    last_name:"Patel",
    email: "m.patel@user.com",
    photo: "img2",
    location: "QLD",
    skills: "Dot Net Developing, Application Developing",
    bio: "Software Developer",
    //Team_id: "Dreamteam"
  },
  {
    googleId: "932301",
    credits: 20,
    first_name: "James",
    last_name: "Jean",
    email: "j.jean@user.com",
    photo: "img3",
    location: "WA",
    skills: "Full Stack Developing, Graphic Design",
    bio: "Software Developer",
    //Team_id: "MyTeam"
  },
  {
    googleId: "123994",
    credits: 20,
    first_name: "Kate",
    last_name: "Kim",
    email: "k.kate@user.com",
    photo: "img4",
    location: "SA",
    skills: "NodeJS, JavaScript, .Net Developing",
    bio: "Web Developer",
    //Team_id: "MyTeam"
  }
]


const projectSeed = [
  {
    project_name: "Dreamteam",
    team_lead: "Jessica Thomson",
    description: "Software Development",
    tags: "programming",
    num_members: 3,
    users: []
  },
  {
    project_name: "MyTeam",
    team_lead: "James Jean",
    description: "Web Development",
    num_members: 4,
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

db.Project
    .remove({})
    .then(() => db.Project.collection.insertMany(projectSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });