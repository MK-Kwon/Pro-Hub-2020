import axios from "axios";
export default {
  // Gets all books
  getBooks: function () {
      return axios.get("/api/teams");
  },
  // Gets the book with the given id
  getBook: function (id) {
    return axios.get("/api/teams/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  },
  get_user_data: function () {
    return axios.get("/api/current_user");
  }
};