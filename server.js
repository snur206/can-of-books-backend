'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const Book = require('./model/books.js');
const app = express();
const handleBooks = require('./handleBooks.js');
app.use(cors());
const mongoose = require('mongoose');
const { request, response } = require('express');
mongoose.connect(process.env.MONGODB_URL);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', _ => {
  console.log('We\'re connected, playa!');
});

app.use(express.json());

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

app.post('/books', async (request, response) => {
  console.log(request.body);
  try {
    let newBook = await Book.create(request.body);
    response.status(200).send(newBook);
  } catch(e) {
    console.log(e);
  }
});

app.delete('/books/:id', async (request, response) => {
  let id = request.params.id;
  console.log('Here is the value of id: ', id);
  try {
   let deletedBook = await Book.findByIdAndDelete(id);
   response.status(200).send('Book has been deleted.');
  } catch(e) {
    console.log(e);
  }
});

app.put('/books/:id', async (request, response) => {
  let id = request.params.id;
  console.log('Updated value of id: ', id);
  request.body.status=true
  try {
    let updatedBook = await Book.findByIdAndUpdate({ _id: id}, request.body);
    console.log(updatedBook);
    response.status(200).send(updatedBook);
  } catch(e) {
    console.log(e);
  }
})

app.listen(PORT, () => console.log(`listening on ${PORT}`));
