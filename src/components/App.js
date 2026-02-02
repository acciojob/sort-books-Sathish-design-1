
import React from "react";
import SortDropdown from "./SortDropdown";
import OrderDropdown from "./OrderDrodown";
import BookList from "./BookList";

export default function App() {
  return (
    <>
      <SortDropdown />
      <OrderDropdown />
      <BookList />
    </>
  );
}

