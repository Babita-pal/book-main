const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Book Review API!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Database connection
const connectDB = require('./config/db');
connectDB();

// Books router
const booksRouter = require('./routes/books');
app.use('/api/books', booksRouter);
