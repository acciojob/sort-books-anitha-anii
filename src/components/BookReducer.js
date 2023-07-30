const initialState = {
    books: [],
  };
  
  const bookReducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_BOOKS_SUCCESS":
        return {
          ...state,
          books: action.payload,
        };
      case "SORT_BOOKS":
        return {
          ...state,
          books: [...state.books].sort((a, b) => {
            const propA = a[action.sortBy].toLowerCase();
            const propB = b[action.sortBy].toLowerCase();
            return propA.localeCompare(propB);
          }),
        };
      default:
        return state;
    }
  };
  
  export default bookReducer;