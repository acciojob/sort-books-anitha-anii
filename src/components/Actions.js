import axios from "axios";

export const fetchBooks = () => {
  return (dispatch) => {
    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=harry+potter")
      .then((response) => {
        dispatch({ type: "FETCH_BOOKS_SUCCESS", payload: response.data });
      })
      .catch((error) => {
       console.log(error);
      });
  };
};

export const sortBooks = (sortBy) => {
  return { type: "SORT_BOOKS", sortBy };
};
