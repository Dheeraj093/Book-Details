import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookCard from './BookCard'; // Assume you have a BookCard component
import './BookSearchPage.css'; // Import the CSS file

const BookSearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    // Fetch all books when the component mounts
    fetchAllBooks();
  }, []);

  const fetchAllBooks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/v1/books/getBooks');
      setAllBooks(response.data.data);
    } catch (error) {
      console.error('Error fetching all books:', error.message);
    }
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/v1/books/getBooks?name=${searchTerm}`);
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
           
          searchResults.map((book) => <BookCard key={book._id} book={book} />)
        ) : (
          
          allBooks.map((book) => <BookCard key={book._id} book={book} />)
        )}
      </div>
    </div>
  );
};

export default BookSearchPage;
