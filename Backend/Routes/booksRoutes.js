const express = require('express');
const router = express.Router();
const { createBook, getBooks, updateBook, deleteBook, getBookById } = require('../Controller/booksController');

// Route for creating a new local book
router.post('/createBook', createBook);

// Route for getting all local books
router.get('/getBooks', getBooks);

// Route for updating a local book by ID
router.patch('/updateBook/:id', updateBook);

// Route for deleting a local book by ID
router.delete('/deleteBook/:id', deleteBook);

// Route for getting a specific local book by ID
router.get('/getBookById/:id', getBookById);

module.exports = router;
