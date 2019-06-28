const express = require('express')
const { Book }  = require('./../data/mongoose')

const router = express.Router()

router.post('/', async (req, res) => {
    const {
        title, author, category, numberOfPages, publicationYear
    } = req.body

    const book = new Book({
        title, author, category, numberOfPages, publicationYear
    })

    try {
        await book.save()
        res.status(201).json(book)
    } catch (ex) {
        console.error(ex)
        res.sendStatus(500)
    }
})

router.get('/', async (req, res) => {
    try {
        const books = await Book.find()
        res.json(books)
    } catch (ex) {
        console.error(ex)
        res.sendStatus(500)
    }  
})

router.get('/:id', async (req, res) => {
    const { id } = req.params

    try {
        const book = await Book.findById(id)
        if (book) {
            res.json(book)
        } else {
            res.sendStatus(404)
        }
    } catch (ex) {
        console.error(ex)
        res.sendStatus(500)
    }  
})

router.put('/:id', async (req, res) => {
    const { id } = req.params

    try {
        const book = await Book.findByIdAndUpdate(id, req.body, { useFindAndModify: false } )
        res.sendStatus(204)
    } catch (ex) {
        console.error(ex)
        res.sendStatus(500)
    }  
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params

    try {
        const book = await Book.findByIdAndRemove(id, { useFindAndModify: false })
        res.json(book)
    } catch (ex) {
        console.error(ex)
        res.sendStatus(500)
    }  
})

module.exports = router