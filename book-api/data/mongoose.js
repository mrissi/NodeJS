const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/book_manager'

const connect = () => {
    return mongoose.connect(url, { useNewUrlParser: true })
}

const Book = mongoose.model('Book', {
    title: { type: String, required: true },
    author: { type: String, required: true },
    category: String,
    numberOfPages: { type: Number, min: 1, required: true },
    publicationYear: Number
})

module.exports = {
    connect,
    Book
}