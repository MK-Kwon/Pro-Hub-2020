const db = require("../models");
const axios = require("axios");
// const axios = require("axios")
// Export API Routes to Express
module.exports = function (app) {
  // Get Projects
  app.get("/api/projects", async ({ body }, res) => {
    // Find all exercises in workout
    const request = await db.Project.find({})
    // Send the request back to the front end
    res.send(request)
  });

  

  app.get("/api/projects/:id", async ({ body }, res) => {
    // Find all workouts
    const request = await db.Project.find({}).populate("users")
    // Send the request back to the front end
    res.send(request)
  });
  app.put("/api/projects/:id", async (req, res) => {
    // Find the project that was created and update it with a user
    const request = await db.User.findOneAndUpdate({ _id: req.params.id }, {
      // Append the User to the Project object
      $push: { User: req.body }
    })
    // Send the request back to the front end
    res.send(request)
  });


  app.post("/api/user", async ({ body }, res) => {
    // Create an empty workout object ready for exercises to get put into it
    const request = await db.User.create(body)
    // Send the request back to the front end
    res.send(request)
  });
  app.get("/api/location/:lat_long", async (req, res) => {
    const coordinates = req.params.lat_long.split("+")
    const lat = coordinates[0] || "30.2672"
    const lon = coordinates[1] || "97.7431"
    console.log(lat)
    console.log(lon)
    const get_city_from_coord = async (lat, lon) => {
      // var search_city = search_city
      var queryURL = "https://nominatim.openstreetmap.org/reverse?format=json&lat=" + lat + "&lon=" + lon
      // print(queryURL)
      axios.post(queryURL)
        .then(response => {
          var body_data = response.data
          return res.json(body_data);
          console.log(body_data)
        })
    }
    get_city_from_coord(lat, lon)

  });
  app.get("/api/github/:username", async (req, res) => {
    const username = req.params.username
    const query_url = "https://api.github.com/users/" + username;
    // Make a request to the github api
    axios.get(query_url).then(function (response) {
      const info = response.data
      res.json(info)
      // console.log(response)
    });
  });

};