import React, { useState } from "react";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";
import './App.css';

const App = () => {
  // Initial state of books
  const [books, setBooks] = useState([
    // { id: 1, title: "1984", author: "George Orwell", year: 1949 },
    // { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  ]);

  const addBook = (book) => {
    setBooks([...books, { ...book, id: books.length + 1 }]);
  };

  // To handle book deletion
  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  // To handle book editing
  const editBook = (updatedBook) => {
    setBooks(
      books.map((book) => (book.id === updatedBook.id ? updatedBook : book))
    );
  };

  return (
    <div className="App">
      <h1>Book Inventory CRUD</h1>
      <BookForm addBook={addBook} />
      <BookList books={books} deleteBook={deleteBook} editBook={editBook} />
    </div>
  );
};

export default App;
