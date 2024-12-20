// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const BookList = ({ books, deleteBook }) => {
  return (
    <div className="container mt-5">
      <h2>Book List</h2>
      <Link to="/add" className="btn btn-primary mb-3">
        Add New Book
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Genre</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>
                <Link to={`/details/${book.id}`}>{book.title}</Link>
              </td>
              <td>{book.author}</td>
              <td>{book.genre}</td>
              <td>
                <Link to={`/edit/${book.id}`} className="btn btn-warning btn-sm">
                  Edit
                </Link>
                <button
                  onClick={() => {
                    if (window.confirm('Are you sure you want to delete this book?')) {
                      deleteBook(book.id);
                    }
                  }}
                  className="btn btn-danger btn-sm ml-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookList;
