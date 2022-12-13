'use strict'

require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URL);

const Book = require('./model/books.js');

async function seed() {
    await Book.create({
        title: 'test book 1',
        description: 'testing for lab 11, so book 1',
        status: true
    });
    await Book.create({
        title: 'test book 2',
        description: 'testing for lab 11, so book 2',
        status: true
    });
    await Book.create({
        title: 'test book 3',
        description: 'testing for lab 11, so book 3',
        status: true
    });
    console.log('database is seeded.');
    mongoose.disconnect()
}
seed();