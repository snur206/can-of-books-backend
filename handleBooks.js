'use strict';

const Book = require('./model/books');

async function handleBooks(request, response) {
    try {
        const books = await Book.find({

        })
        
        response.status(200).send(books)
    } catch(err) {
        console.log(err)
    
    }
}
module.exports = handleBooks;