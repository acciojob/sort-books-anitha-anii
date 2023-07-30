import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchBooks, sortBooks } from "./Actions";
import "../styles/App.css";

const BookList = ({ books, fetchBooks, sortBooks }) => {
  const [selectedSortOption, setSelectedSortOption] = useState("title");

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  const handleSortChange = (event) => {
    const selectedOption = event.target.value;
    setSelectedSortOption(selectedOption);
    console.log("Selected Sorting Option: ", selectedOption);
    sortBooks(selectedOption);
  };

  return (
    <div>
      <div>
        <label htmlFor="sortSelect">Sort by:</label>
        <select id="sortSelect" onChange={handleSortChange} value={selectedSortOption}>
          <option value="title">Title</option>
          <option value="author">Author</option>
          <option value="publisher">Publisher</option>
        </select>
      </div>

      <div>
        {books &&
          books.map((book, index) => (
            <table key={index}>
              <tbody>
                <tr>
                  <th>Title: {book.volumeInfo.title}</th>
                </tr>
                <tr>
                  <td>Author: {book.volumeInfo.authors?.join(", ")}</td>
                </tr>
                <tr>
                  <td>Publisher: {book.volumeInfo.publisher}</td>
                </tr>
              </tbody>
            </table>
          ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    books: state.books.books.items,
  };
};

const mapDispatchToProps = {
  fetchBooks,
  sortBooks,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
