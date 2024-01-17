const mongoose = require('mongoose');

const externalBookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  isbn: {
    type: String,
    required: true,
  },
  authors: {
    type: [String],
    required: true,
  },
  number_of_pages: {
    type: Number,
    required: true,
  },
  publisher: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  release_date: {
    type: String,
    required: true,
  },
});

const ExternalBook = mongoose.model('ExternalBook', externalBookSchema);

module.exports = ExternalBook;
