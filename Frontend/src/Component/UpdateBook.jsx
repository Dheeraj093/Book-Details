import React, { useState, useEffect } from 'react';
import './UpdateBook.css';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const UpdateBook = () => {
  const bookId = useLocation().pathname.split("/")[1];
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    isbn: '',
    authors: '',
    country: '',
    number_of_pages: '',
    publisher: '',
    release_date: '',
  });

  useEffect(() => {
     
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/v1/books/getBookById/${bookId}`);
        const bookDetails = response.data.data;
        setFormData(bookDetails);
      } catch (error) {
        console.error('Error fetching book details:', error.message);
      }
    };

    fetchBookDetails();
  }, [bookId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
          const res = await axios.patch(`http://localhost:5000/api/v1/books/updateBook/${bookId}`, formData);
  
      console.log("updatedBook", res.data);
      navigate("/");
    } catch (error) {
      console.error('Error updating book:', error.message);
      
    }
  };

  return (
    <div className="update-book-form-container">
      <h2 className="update-book-title">Update Book</h2>
      <form onSubmit={handleUpdate}>
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
        <button type="submit" className="update-book-btn">Update Book</button>
      </form>
    </div>
  );
};

export default UpdateBook;
