import { FETCH_BOOKS, SET_SORT, SET_ORDER } from "./actions";

const initialState = {
  books: [],
  sortBy: "title",
  order: "asc"
};

export const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS:
      return { ...state, books: action.payload };

    case SET_SORT:
      return { ...state, sortBy: action.payload };

    case SET_ORDER:
      return { ...state, order: action.payload };

    default:
      return state;
  }
};
