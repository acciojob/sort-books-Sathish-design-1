import React from "react";
import { useDispatch } from "react-redux";
import { setOrder } from "../store/actions";

export default function OrderDropdown() {
  const dispatch = useDispatch();

  return (
    <select onChange={(e) => dispatch(setOrder(e.target.value))}>
      <option value="asc">Ascending</option>
      <option value="desc">Descending</option>
    </select>
  );
}
