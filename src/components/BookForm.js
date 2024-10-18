import React, { useState } from "react";

const BookForm = ({ addBook }) => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    year: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title && formData.author && formData.year) {
      addBook(formData);
      setFormData({ title: "", author: "", year: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
        required
      />
      <input
        type="text"
        name="author"
        value={formData.author}
        onChange={handleChange}
        placeholder="Author"
        required
      />
      <input
        type="number"
        name="year"
        value={formData.year}
        onChange={handleChange}
        placeholder="Year"
        required
      />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default BookForm;
