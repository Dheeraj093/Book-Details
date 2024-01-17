const axios = require('axios');
const ExternalBook = require('../Model/externalBookModel');

exports.getExternalBooks = async (req, res) => {
  const { name } = req.query;

  try {
    // Make a request to the external API
    const apiUrl = name
      ? `https://anapioficeandfire.com/api/books/?name=${name}`
      : 'https://anapioficeandfire.com/api/books/';
      
    const response = await axios.get(apiUrl);
    
    // Check if the API response contains data
    if (!response.data || response.data.length === 0) {
      return res.status(200).json({ status_code: 200, status: 'success', data: [] });
    }

    // Transform external data to match the specified response format
    const formattedBooks = response.data.map((book) => ({
      name: book.name,
      isbn: book.isbn,
      authors: book.authors,
      number_of_pages: book.numberOfPages,
      publisher: book.publisher,
      country: book.country,
      release_date: book.released,
    }));

    res.status(200).json({ status_code: 200, status: 'success', data: formattedBooks });
  } catch (error) {
    console.error('Error fetching external books:', error.message);

    if (error.response && error.response.status) {
      // If the external API returns an error status, pass it through
      res.status(error.response.status).json({
        status_code: error.response.status,
        status: 'error',
        message: 'External API Error',
      });
    } else {
      // Handle other errors
      res.status(500).json({ status_code: 500, status: 'error', message: 'Internal Server Error' });
    }
  }
};
