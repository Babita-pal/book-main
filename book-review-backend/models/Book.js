const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  description: String,
  imageUrl: String,
  averageRating: { type: Number, default: 0 },
});

module.exports = mongoose.model('Book', bookSchema);
