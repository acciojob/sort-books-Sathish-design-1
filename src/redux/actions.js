export const FETCH_BOOKS_REQUEST = 'FETCH_BOOKS_REQUEST';
export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS';
export const FETCH_BOOKS_FAILURE = 'FETCH_BOOKS_FAILURE';
export const SET_SORT_CRITERIA = 'SET_SORT_CRITERIA';

export const fetchBooks = () => async (dispatch) => {
  dispatch({ type: FETCH_BOOKS_REQUEST });
  try {
    // Note: You will need a valid NYT API Key
    const response = await fetch(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=tKIVVmZq29JmGM3w7tLofJjIe0xCxnDhqWbVPL4aZhGxttSE`);
    const data = await response.json();
    dispatch({ type: FETCH_BOOKS_SUCCESS, payload: data.results.books });
  } catch (error) {
    dispatch({ type: FETCH_BOOKS_FAILURE, payload: error.message });
  }
};

export const setSortCriteria = (criteria) => ({
  type: SET_SORT_CRITERIA,
  payload: criteria,
});