const Book = require('../Model/bookModel');

const createBook = async (req, res, next) => {
  const { name, isbn, authors, country, number_of_pages, publisher, release_date } = req.body;
  // console.log(req.body)
  try {
    // Check if the book already exists by matching the ISBN
    const existingBook = await Book.findOne({ isbn });

    if (existingBook) {
      // Book with the same ISBN already exists
      throw new Error('Book with the same ISBN already exists.');
    }

    // If the book doesn't exist, create a new one
    const createdBook = await Book.create({
      name,
      isbn,
      authors,
      country,
      number_of_pages,
      publisher,
      release_date,
    });

    res.status(201).json({ status_code: 201, status: 'success', data: [{ book: createdBook }] });
  } catch (error) {
    // Pass the error to the next middleware (error-handling middleware)
    next(error);
  }
};


const getBooks = async (req, res, next) => {
  const { name, country, publisher, release_date } = req.query;
  // console.log("object:",name)
  // Build the query based on provided parameters
  const query = {};
  if (name) query.name = name;
  if (country) query.country = country;
  if (publisher) query.publisher = publisher;
  if (release_date) query.release_date = release_date;

  try {
    const books = await Book.find(query);

    res.status(200).json({ status_code: 200, status: 'success', data: books });
  } catch (error) {
    next(error);
  }
};

const updateBook = async (req, res, next) => {
  const { id } = req.params;
  const { name, isbn, authors, country, number_of_pages, publisher, release_date } = req.body;

  try {
    const updatedBook = await Book.findByIdAndUpdate(
      id,
      { name, isbn, authors, country, number_of_pages, publisher, release_date },
      { new: true }
    );

    res.status(200).json({
      status_code: 200,
      status: 'success',
      message: `The book ${updatedBook.name} was updated successfully`,
      data: updatedBook,
    });
  } catch (error) {
    next(error);
  }
};

const deleteBook = async (req, res, next) => {
  const { id } = req.params;

  try {
    const deletedBook = await Book.findByIdAndDelete(id);

    res.status(200).json({
      status_code: 200,
      status: 'success',
      message: `The book ${deletedBook.name} was deleted successfully`,
      data: [],
    });
  } catch (error) {
    next(error);
  }
};

const getBookById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const specificBook = await Book.findById(id);

    if (!specificBook) {
      return res.status(404).json({ status_code: 404, status: 'error', message: 'Book not found' });
    }

    res.status(200).json({ status_code: 200, status: 'success', data: specificBook });
  } catch (error) {
    next(error);
  }
};


module.exports = {getBookById,deleteBook,updateBook,getBooks,createBook} 