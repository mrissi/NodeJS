const express = require('express')
const productsRouter = require('./routes/products')
const bodyParser = require('body-parser')

const app = express()
app.use(express.static('public'))
app.use(bodyParser.json())

const dataAtual = (req, res, next) => {
    req.dataAtual = new Date()
    next()
}

app.use('/login', dataAtual)

const users = [
    { id: '1', name: 'Jhon' },
    { id: '2', name: 'Aria' }
]

app.get('/', (req, res) => {
    res.status(200).send(`Hello from express. ${req.dataAtual}`)
})

app.post('/login', (req, res) => {
    console.log('body:', req.body)
    res.send(`POST recebido em /login ${req.dataAtual}`)
})

app.put('/settings', (req, res) => {
    res.send('PUT recebido /settings')
})

app.delete('/logs', (req, res) => {
    res.send('DELETE recebido /logs')
})

app.all('/admin', (req, res, next) => {
    console.log('/admin acessado em', req.method, new Date())
    next()
})

app.get('/admin', (req, res) => {
    res.send('Welcome to admin area!')
})

app.get('/users/:userId', (req, res) => {
    const { userId } = req.params
    const user = users.find(user => user.id === userId)
    
    if (user) {
        res.json(user)
    }
    else {
        res.sendStatus(404)
    }
    
})

app.get('/users/:userId/books/:bookId', (req, res) => {
    const { userId, bookId } = req.params
    res.send(`GET recebido para user: ${userId} - book: ${bookId}`)
})

app.get('/users', (req, res) => {
    res.json(users)
})

app.use('/products', dataAtual, productsRouter)


app.listen(8080, () => console.log('Servidor rodando...'))