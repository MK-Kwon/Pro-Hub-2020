import axios from "axios";

export default {
  // Project Routes
  getProjects: function () {
    return axios.get("/api/projects");
  },
  getProject: function (id) {
    console.log("API.js")
    console.log(id)
    return axios.get("/api/project/" + id);
  },
  postProject: function (projectData) {
    return axios.post("/api/project", projectData);
  },
  addUsers: function (projectId, userId) {
    return axios.put("/api/project/" + projectId + "/add-user", { userId });
  },

  getUserProjects: function(userId) {
    return axios.get("/api/user/" + userId + "/projects")
  },

  // User Routes
  getUsers: function () {
    return axios.get("/api/users");
  },
  // Gets the book with the given id
  getUser: function (id) {
    return axios.get("/api/user/" + id);
  },
  updateUser: function (id, data) {
    return axios.put("/api/user/" + id, data);
  },

  addProject: function (userId, projectId) {
    return axios.put("/api/user/" + userId + "/add-project", { projectId });
  },

  // Other Routes
  getLocation: function (lat, lon) {
    return axios.get(`/api/location/${lat}+${lon}`);
  },
  getGithub: function (username) {
    return axios.get(`/api/github/${username}`);
  }

}


