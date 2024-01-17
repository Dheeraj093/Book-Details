import React, { useState } from 'react';
import './AddBookForm.css';
import axios from 'axios';

const AddBookForm = () => {
   
  const [formData, setFormData] = useState({
    name: '',
    isbn: '',
    authors: [],
    country: '',
    number_of_pages: '',
    publisher: '',
    release_date: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

   
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("formdata", formData);
    try {
       
      const response = await axios.post('http://localhost:5000/api/v1/books/createBook', formData);

      console.log('Book created:', response.data);

       
      setFormData({
        name: '',
        isbn: '',
        authors: '',
        country: '',
        number_of_pages: '',
        publisher: '',
        release_date: '',
      });
    } catch (error) {
      console.error('Error creating book:', error.message);
       
    }
  };

  return (
    <div className="add-book-form-container">
      <h2 className="form-title">Add Book</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
        </label>
        <label>
          ISBN:
          <input type="text" name="isbn" value={formData.isbn} onChange={handleInputChange} />
        </label>
        <label>
          Authors:
          <input type="text" name="authors" value={formData.authors} onChange={handleInputChange} />
        </label>
        <label>
          Country:
          <input type="text" name="country" value={formData.country} onChange={handleInputChange} />
        </label>
        <label>
          Pages:
          <input
            type="number"
            name="number_of_pages"
            value={formData.number_of_pages}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Publisher:
          <input type="text" name="publisher" value={formData.publisher} onChange={handleInputChange} />
        </label>
        <label>
          Release Date:
          <input type="date" name="release_date" value={formData.release_date} onChange={handleInputChange} />
        </label>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBookForm;
