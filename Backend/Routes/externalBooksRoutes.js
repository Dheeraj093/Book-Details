const express = require('express');
const router = express.Router();
const {getExternalBooks} = require('../Controller/externalBooksController');

// Route for getting external books based on the name
router.get('/getExternalBooks',getExternalBooks);

module.exports = router;
