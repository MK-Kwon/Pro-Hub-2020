const Workout = require("../models");

// Export API Routes to Express
module.exports = function (app) {

  // Get Last Workout
  app.get("/api/teams", async ({ body }, res) => {
    // Find all exercises in workout
    const request = await Workout.find({})
    // Send the request back to the front end
    res.send(request)
  });

  app.get("/api/teams/:id", async ({ body }, res) => {
    // Find all workouts
    const request = await Workout.find({}).populate("workout")
    // Send the request back to the front end
    res.send(request)
  });

  app.put("/api/workouts/:id", async (req, res) => {
    // Find the workout that was created and update it with an exercise
    const request = await Workout.findOneAndUpdate({ _id: req.params.id }, {
      // Append the Exercise to the workout object
      $push: { exercises: req.body }
    })
    // Send the request back to the front end
    res.send(request)
  });

  app.post("/api/workouts", async ({ body }, res) => {
    // Create an empty workout object ready for exercises to get put into it
    const request = await Workout.create(body)
    // Send the request back to the front end
    res.send(request)
  });
  app.get("/api/location/:lat_lon", async ({ body }, res) => {
    // Find all workouts
    // const request = await Workout.find({}).populate("workout")

    function get_city_from_coord(lat, lon) {
      var search_city = search_city
      var queryURL = "https://nominatim.openstreetmap.org/reverse?format=json&lat=" + lat + "&lon=" + lon
      print(queryURL)

      $.ajax({ url: queryURL, method: "GET" }).then(function (response) {
        var city = response.address.city
        print(city) +
          get_todays_weather(city)

      })
    }
    get_city_from_coord(lat, lon)
    // Send the request back to the front end
    res.send(request)
  });

};