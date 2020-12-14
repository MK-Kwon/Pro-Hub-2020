import axios from "axios";

export default {
  // Gets all books
  getTeams: function () {
    return axios.get("/api/teams");
  },
  // Gets the book with the given id
  getTeam: function (id) {
    return axios.get("/api/teams/" + id);
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