const db = require("../models");
const axios = require("axios");
// const axios = require("axios")

// Export API Routes to Express
module.exports = function (app) {

  // Get Last Workout
  app.get("/api/projects", async ({ body }, res) => {
    // Find all exercises in workout
    const request = await db.Project.find({})
    // Send the request back to the front end
    res.send(request)
  });

  app.get("/api/projects/:id", async ({ body }, res) => {
    // Find all workouts
    const request = await db.Project.find({}).populate("workout")
    // Send the request back to the front end
    res.send(request)
  });

  app.put("/api/user/:id", async (req, res) => {
    // Find the workout that was created and update it with an exercise
    const request = await db.User.findOneAndUpdate({ _id: req.params.id }, {
      // Append the Exercise to the workout object
      $push: { exercises: req.body }
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
    // Find all workouts
    // const request = await Workout.find({}).populate("workout")
    // console.log(req.params.lat_long)
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
        .catch(error => console.log(error));
      // try {
      //   const res = await axios.get(queryURL)
      //   console.log(res.data)
      //   // let city = res.address.city;
      //   // return await res.json();
      //   // console.log(json)
      // }
      // catch{
      //   console.log(Error)
      // }
      // .then(function (response) {
      // var city = response.address.city
      // print(city) +
      // get_todays_weather(city)
      // res.send(city)
    }
    get_city_from_coord(lat, lon)
    // Send the request back to the front end
  });

};