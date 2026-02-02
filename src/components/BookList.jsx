import React from "react";
import { useSelector } from "react-redux";
import { getSortedBooks } from "../store/store";

export default function BookList() {
  const books = useSelector(getSortedBooks);

  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Publisher</th>
          <th>ISBN</th>
        </tr>
      </thead>
      <tbody>
        {books.map((b, i) => (
          <tr key={i}>
            <td>{b.title}</td>
            <td>{b.author}</td>
            <td>{b.publisher}</td>
            <td>{b.isbn}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
