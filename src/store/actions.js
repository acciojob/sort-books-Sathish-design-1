export const FETCH_BOOKS = "FETCH_BOOKS";
export const SET_SORT = "SET_SORT";
export const SET_ORDER = "SET_ORDER";

export const fetchBooks = (books) => ({
  type: FETCH_BOOKS,
  payload: books
});

export const setSort = (criteria) => ({
  type: SET_SORT,
  payload: criteria
});

export const setOrder = (order) => ({
  type: SET_ORDER,
  payload: order
});
