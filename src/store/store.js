import { createStore } from "redux";
import { bookReducer } from "./reducer";

export const store = createStore(bookReducer);


export const getSortedBooks = (state) => {
  const { books, sortBy, order } = state;

  return [...books].sort((a, b) => {
    if (a[sortBy] < b[sortBy]) return order === "asc" ? -1 : 1;
    if (a[sortBy] > b[sortBy]) return order === "asc" ? 1 : -1;
    return 0;
  });
};
