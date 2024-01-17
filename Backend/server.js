const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const externalBooksRoutes = require('./Routes/externalBooksRoutes');
const booksRoutes = require('./Routes/booksRoutes');
const connectDB = require("./config/db");
const cors = require("cors");
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();
app.use(cors());

app.use(express.json());

// Routes
app.use('/api/external-books', externalBooksRoutes);
app.use('/api/v1/books', booksRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ status_code: 500, status: 'error', message: err.message });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// module.exports = app; // Export for testing purposes
