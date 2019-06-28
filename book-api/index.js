const express = require("express")
const cors = require('cors')
const bodyParser = require('body-parser')
const bookRouter = require('./rotas/book')
const { connect } = require('./data/mongoose')

const app = express()
app.use(bodyParser.json())
app.use(cors('localhost:3000'))
app.use('/books', bookRouter)

app.listen(8080, async () => {
    console.log('book-api rodando em localhost:8080')
    await connect()
    console.log('mongoose conectado')
})