import React from "react";
import BookItem from "./BookItem";

const BookList = ({ books, deleteBook, editBook }) => {
  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books.map((book) => (
          <BookItem
            key={book.id}
            book={book}
            deleteBook={deleteBook}
            editBook={editBook}
          />
        ))}
      </ul>
    </div>
  );
};

export default BookList;
