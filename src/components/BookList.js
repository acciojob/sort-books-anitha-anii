import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchBooks, sortBooks } from "./Actions";

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
        <label htmlFor="sortSelect">Sort By:</label>
        <select id="sortSelect" onChange={handleSortChange} value={selectedSortOption}>
          <option value="title">Title</option>
          <option value="author">Author</option>
          <option value="publisher">Publisher</option>
        </select>
      </div>

      <div>
      {books &&
  books.map((book, index) => (
    <div key={index}>
      <h2>Title: {book.volumeInfo.title}</h2>
      <p>Author: {book.volumeInfo.authors?.join(", ")}</p>
      <p>Publisher: {book.volumeInfo.publisher}</p>
     
    </div>
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

