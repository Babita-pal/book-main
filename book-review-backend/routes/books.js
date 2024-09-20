const express = require('express');
const router = express.Router();
const Book = require('../models/Book');
const Review = require('../models/Review');

// Get all books
router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// Get a specific book by ID, including reviews
router.get('/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });

    // Get reviews for the book
    const reviews = await Review.find({ bookId: req.params.id });
    
    res.json({ book, reviews });
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// Submit a review for a specific book
router.post('/:id/reviews', async (req, res) => {
  const { rating, comment } = req.body;
  
  if (!rating || !comment) {
    return res.status(400).json({ message: 'Rating and comment are required' });
  }

  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });

    const review = new Review({
      bookId: req.params.id,
      rating,
      comment
    });

    await review.save();

    // Update average rating for the book
    const reviews = await Review.find({ bookId: req.params.id });
    const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
    book.averageRating = averageRating;
    await book.save();

    res.json(review);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
