import React from "react";
import { useDispatch } from "react-redux";
import { setSort } from "../store/actions";

export default function SortDropdown() {
  const dispatch = useDispatch();

  return (
    <select onChange={(e) => dispatch(setSort(e.target.value))}>
      <option value="title">Title</option>
      <option value="author">Author</option>
      <option value="publisher">Publisher</option>
    </select>
  );
}
