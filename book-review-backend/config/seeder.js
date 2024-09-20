const mongoose = require('mongoose');
const Book = require('../models/Book');

mongoose.connect('mongodb://127.0.0.1:27017/book-review-db')
  .then(() => console.log('MongoDB connected!'))
  .catch((err) => console.log('MongoDB connection error:', err));


const books = [
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    description: 'A novel set in the 1920s about the mysterious millionaire Jay Gatsby.',
    imageUrl: 'https://image-url.com/gatsby.jpg'
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    description: 'A classic novel about racial injustice in the deep South.',
    imageUrl: 'https://image-url.com/mockingbird.jpg'
  }
];

const seedBooks = async () => {
  await Book.deleteMany({});
  await Book.insertMany(books);
  console.log('Books seeded!');
  mongoose.connection.close();
};

seedBooks();
