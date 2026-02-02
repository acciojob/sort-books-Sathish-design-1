import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks, setSortCriteria } from '../redux/actions';

const App = () => {
  const dispatch = useDispatch();
  const { books, sortBy, order, loading } = useSelector(state => ({
    books: state.books,
    sortBy: state.sortBy,
    order: state.order,
    loading: state.loading
  }));
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const sortedBooks = [...books].sort((a, b) => {
    const valA = a[sortBy.toLowerCase()].toString().toLowerCase();
    const valB = b[sortBy.toLowerCase()].toString().toLowerCase();
    if (order === 'asc') return valA > valB ? 1 : -1;
    return valA < valB ? 1 : -1;
  });

  return (
    <div className="App">
      <h1>Book Sorting App</h1>

      {/* Selector: select:nth-child(1) */}
      <select value={sortBy} onChange={(e) => dispatch(setSortCriteria({ sortBy: e.target.value }))}>
        <option value="title">Title</option>
        <option value="author">Author</option>
        <option value="publisher">Publisher</option>
      </select>

      {/* Selector: select:nth-child(2) */}
      <select value={order} onChange={(e) => dispatch(setSortCriteria({ order: e.target.value }))}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>

      {loading ? <p>Loading...</p> : (
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
            {sortedBooks.map((book) => (
              <tr key={book.primary_isbn10}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.publisher}</td>
                <td>{book.primary_isbn10}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default App;