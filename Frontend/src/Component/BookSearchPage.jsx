import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookCard from './BookCard';  
import './BookSearchPage.css';  

const BookSearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
 
    fetchAllBooks();
  }, []);

  const fetchAllBooks = async () => {
    try {
      const response = await axios.get('https://book-details-6nel.onrender.com/api/v1/books/getBooks');
      setAllBooks(response.data.data);
    } catch (error) {
      console.error('Error fetching all books:', error.message);
    }
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://book-details-6nel.onrender.com/api/v1/books/getBooks?name=${searchTerm}`);
      setSearchResults(response.data.data);
    } catch (error) {
      console.error('Error searching books:', error.message);
    }
  };

  return (
    <div className="book-search-container">
      <h2 className="page-title">Book Search</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="book-list">
        {searchResults.length > 0 ? (
           
          searchResults.map((book) => <BookCard book={book} />)
        ) : (
          
          allBooks.map((book) => <BookCard  book={book} />)
        )}
      </div>
    </div>
  );
};

export default BookSearchPage;
