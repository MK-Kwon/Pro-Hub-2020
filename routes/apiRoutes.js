const db = require("../models");
// const axios = require("axios")
const axios = require("axios");


// Export API Routes to Express
module.exports = function (app) {

  //=====================================================================
  //                        Projects
  //=====================================================================
  // using try/catch statement to detect errors during execution of the code
  app.get("/api/projects", async ({ body }, res) => {
    try {
      // Find all Projects in database
      const request = await db.Project.find({})
      // Send the request back to the front end
      res.send(request)
    } catch (error) {
      console.log({ "GET - Projects": error })
      res.send(error)
    }

  });

  app.get("/api/project/:id", async (req, res) => {

    try {
      console.log("apiRoutes.js")
      // access to 'id' route by using "req.params.id"
      console.log(req.params.id)
      // use Mongoose to create objectID to find a project that matches the gitven id
      const request = await db.Project.findOne({ _id: req.params.id })
      // Send the request back to the front end
      res.send(request)
    } catch (error) {
      console.log({ "GET - Project": error })
      res.send(error)
    }
  });

  app.put("/api/project/:id/add-user", async (req, res) => {
    // Find the Project that was created and update it with a user
    try {
      const dbProject = await db.Project.findOneAndUpdate({ _id: req.params.id }, {
        // Append the User to the Project object
        $push: { users: req.body.userId }
      }, { new: true });
      // Send the request back to the front end
      res.send(dbProject)

    } catch (error) {
      console.log({ "PUT - Project Add User": error })
      res.send(error)
    }
  });

  app.post("/api/project", async (req, res) => {

    try {
      const data = req.body
      // create an empty Project object ready for the data to be inserted into
      const request = await db.Project.create({
        project_name: data.project_name,
        team_lead: data.team_lead,
        description: data.description,
        tags: data.tags,
        location: data.location,
        num_members: data.num_members,
        users: data.users
      })
      // Send the request back to the front end
      res.send(request)
    } catch (error) {
      console.log({ "POST - Project": error })
      res.send(error)
    }
  });

  app.get("/api/user/:id/projects", async (req, res) => {

    // try {
    const findUserProjects = await db.Project.find({ users: { _id: req.params.id } })
    // const findUserProjects = await db.Project.find({ users })

    res.send(findUserProjects)

    // } catch (error) {
    //   console.log({ "GET - User Projects": error })
    //   res.send(error)
    // }
  });



  //=====================================================================
  //                        Users
  //=====================================================================

  app.get("/api/users", async (req, res) => {
    // Find all exercises in workout
    // console.log(req.)

    try {
      // .populate in Mongoose is used to bring only the needed info
      // in this case it gets 'users' from the 'User' property and populate it
      const request = await db.User.find({}).populate("users")
      // Send the request back to the front end
      // console.log(request)
      res.send(request)
    } catch (error) {
      console.log({ "GET - Users": error })
      res.send(error)
    }
  });

  app.get("/api/user/:id", async (req, res) => {
    // console.log(req.params.id)
    try {
      // Find all User in database
      const request = await db.User.find({});

      res.send(request);
    } catch (error) {
      console.log({ "GET - User": error })
      res.send(error)
    }
  
  });

  app.post("/api/user", async ({ body }, res) => {
    try {
      const request = await db.User.create(body)
      // Send the request back to the front end
      res.send(request)
    } catch (error) {
      console.log({ "POST - User": error })
      res.send(error)
    }
  });

  app.put("/api/user/:id", async (req, res) => {
    // Find the project that was created and update it with a user
    // console.log("Hello")
    // console.log(req.params.id)
    try {
      const request = await db.User.findOneAndUpdate({ _id: req.params.id }, {
        // Append the User to the Project object
        $set: {
          github_username: req.body.github_username,
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          email: req.body.email,
          photo: req.body.photo,
          github_photo: req.body.github_photo,
          location: req.body.location,
          skills: req.body.skills,
          bio: req.body.bio,
          followers: req.body.followers,
          following: req.body.following,
          repos: req.body.repos,
          github_url: req.body.github_url

        }
      })
      // Send the request back to the front end
      // res.redirect('/profile')
      res.send(request)
    } catch (error) {
      console.log({ "PUT - User": error })
      res.send(error)
    }

  });

  app.put("/api/user/:id/add-project", async (req, res) => {

    try {
      const dbUser = await db.User.findOneAndUpdate({ _id: req.params.id }, {
        // Append the User to the Project object
        $push: { project: req.body.projectId }
      }, { new: true });
      // Send the request back to the front end
      res.send(dbUser)
    } catch (error) {
      console.log({ "PUT - User ID to Project": error })
      res.send(error)
    }
  });

  //=====================================================================
  //                  Location and Github
  //=======================================================================

  app.get("/api/location/:lat_long", async (req, res) => {
    const coordinates = req.params.lat_long.split("+")
    const lat = coordinates[0] || "30.2672"
    const lon = coordinates[1] || "97.7431"
    // console.log(lat)
    // console.log(lon)
    const get_city_from_coord = async (lat, lon) => {
      // var search_city = search_city
      var queryURL = "https://nominatim.openstreetmap.org/reverse?format=json&lat=" + lat + "&lon=" + lon
      // print(queryURL)
      try {
        axios.post(queryURL)
          .then(response => {
            var body_data = response.data
            console.log(body_data)
            return res.json(body_data);

          })
      } catch (error) {
        console.log({ "GET - User Location": error })
        res.send(error)
      }
    }
    get_city_from_coord(lat, lon)

  });
  
  app.get("/api/github/:username", async (req, res) => {
    const username = req.params.username
    const query_url = "https://api.github.com/users/" + username;
    // // Make a request to the github api

    try {
      axios.get(query_url).then(function (response) {
        const info = response.data
        res.json(info)
        // console.log(response)
      });
    } catch (error) {
      console.log({ "GET - Github Username": error })
      res.send(error)
    }
  });

};


