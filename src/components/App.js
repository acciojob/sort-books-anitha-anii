import React from "react";
import { Provider } from "react-redux";
import store from "./Store"; 
import BookList from "./BookList"; 
import '../styles/App.css';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Books List</h1>
        <BookList />
      </div>
    </Provider>
  );
};

export default App;
