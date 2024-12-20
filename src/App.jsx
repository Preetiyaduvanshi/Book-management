// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookList from './components/BookList';
import AddBook from './Components/AddBook';
import EditBook from './Components/EditBook';
import BookDetails from './Components/BookDetails';

const App = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch books from mock API (or local state)
    const mockBooks = [
      { id: 1, title: 'Book One', author: 'Author One', genre: 'Fiction' },
      { id: 2, title: 'Book Two', author: 'Author Two', genre: 'Mystery' },
    ];
    setBooks(mockBooks);
  }, []);

  const addBook = (book) => {
    setBooks([...books, book]);
  };

  const editBook = (updatedBook) => {
    setBooks(books.map((book) => (book.id === updatedBook.id ? updatedBook : book)));
  };

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<BookList books={books} deleteBook={deleteBook} />} />
        <Route path="/add" element={<AddBook addBook={addBook} />} />
        <Route path="/edit/:id" element={<EditBook books={books} editBook={editBook} />} />
        <Route path="/details/:id" element={<BookDetails books={books} />} />
      </Routes>
    </Router>
  );
};

export default App;
