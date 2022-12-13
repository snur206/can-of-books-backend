'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const Book = require('./model/books.js');
const app = express();
const handleBooks = require('./handleBooks.js');
app.use(cors());
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URL);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', _ => {
  console.log('We\'re connected, playa!');
});

const PORT = process.env.PORT || 3003;

app.get('/books', async (request, response) => {
  try {
    let books = await Book.find()
    console.log(books);
    response.send(books);
  } catch(e) {
    console.log(e);
  }
});

app.get('/test', (request, response) => {

  response.send('test request received')

})

app.listen(PORT, () => console.log(`listening on ${PORT}`));
