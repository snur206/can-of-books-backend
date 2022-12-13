'use strict'

require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URL);

const Book = require('./model/books.js');

async function seed() {
    await Book.create({
        title: 'Harry Potter and the Sorcerer\'s Stone',
        description: 'A boy in England discovers he is a Wizard!',
        status: true
    });
    await Book.create({
        title: '48 Laws of Power',
        description: 'Tells you about power and how to use it',
        status: true
    });
    await Book.create({
        title: 'The Cat in the Hat',
        description: 'The best children\'s book for adults',
        status: true
    });
    console.log('database is seeded.');
    mongoose.disconnect()
}
seed();