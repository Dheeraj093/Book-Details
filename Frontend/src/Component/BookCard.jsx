import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './BookCard.css';

const BookCard = ({ book, type }) => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await axios.delete(`https://book-details-6nel.onrender.com/api/v1/books/deleteBook/${book._id}`);
      window.location.reload();
    } catch (error) {
      console.error('Error deleting book:', error.message);
    }
  };

  const handleEdit = () => {
    navigate(`/${book._id}`);
  };

  console.log(book);

  return (
    <div className="book-card">
      <div className="book-actions">
        {type !== 'external' && (
          <>
            <button className="edit-button" onClick={handleEdit}>
              Edit
            </button>
            <button className="delete-button" onClick={handleDelete}>
              Delete
            </button>
          </>
        )}
      </div>
      <div className="book-details">
        <h3>{book.name}</h3>
        <p>ISBN: {book.isbn}</p>
        <p>Author: {book.authors.join(', ')}</p>
        <p>Number_of_pages: {book.number_of_pages}</p>
        <p>Country: {book.country}</p>
        <p>Publisher: {book.publisher}</p>
        <p>Release Date: {book.release_date}</p>
      </div>
    </div>
  );
};

export default BookCard;
