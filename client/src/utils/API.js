import axios from "axios";
export default {
  // Gets all books
  getProjects: function () {
    return axios.get("/api/projects");
  },
  // Gets the book with the given id
  getProject: function (id) {
    return axios.get("/api/projects/" + id);
  },

  postProject: function () {
    return axios.post("/api/projects/");
  },
  // Gets all books
  getUsers: function () {
    return axios.get("/api/users");
  },
  // Gets the book with the given id
  getUser: function (id) {
    return axios.get("/api/user/" + id);
  },
  getLocation: function (lat, lon) {
    return axios.get(`/api/location/${lat}+${lon}`);
  },
  getGithub: function (username) {
    return axios.get(`/api/github/${username}`);
  }
  // // Deletes the book with the given id
  // deleteBook: function (id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // // Saves a book to the database
  // saveBook: function (bookData) {
  //   return axios.post("/api/books", bookData);
  // },
};