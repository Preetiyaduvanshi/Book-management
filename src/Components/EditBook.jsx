// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditBook = ({ books, editBook }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = books.find((b) => b.id === parseInt(id));

  const [title, setTitle] = useState(book?.title || '');
  const [author, setAuthor] = useState(book?.author || '');
  const [genre, setGenre] = useState(book?.genre || 'Fiction');

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedBook = { id: parseInt(id), title, author, genre };
    editBook(updatedBook);
    navigate('/');
  };

  if (!book) return <div>Book not found</div>;

  return (
    <div className="container mt-5">
      <h2>Edit Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Author</label>
          <input
            type="text"
            className="form-control"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Genre</label>
          <select
            className="form-control"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          >
            <option>Fiction</option>
            <option>Non-Fiction</option>
            <option>Mystery</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Update Book
        </button>
      </form>
    </div>
  );
};

export default EditBook;
