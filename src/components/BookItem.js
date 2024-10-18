import React, { useState } from "react";

const BookItem = ({ book, deleteBook, editBook }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedBook, setEditedBook] = useState(book);

  const handleChange = (e) => {
    setEditedBook({ ...editedBook, [e.target.name]: e.target.value });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editBook(editedBook);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedBook(book);
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input
            type="text"
            name="title"
            value={editedBook.title}
            onChange={handleChange}
          />
          <input
            type="text"
            name="author"
            value={editedBook.author}
            onChange={handleChange}
          />
          <input
            type="number"
            name="year"
            value={editedBook.year}
            onChange={handleChange}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </>
      ) : (
        <>
          <span>{book.title} by {book.author} ({book.year})</span>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => deleteBook(book.id)}>Delete</button>
        </>
      )}
    </li>
  );
};

export default BookItem;
