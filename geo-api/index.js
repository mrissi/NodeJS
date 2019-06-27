const express = require('express')
const bodyParser = require('body-parser')
const estadosRouter = require('./router/estados')
const authMiddleware = require('./middlewares/auth')

const app = express()

app.use(bodyParser.json())
app.use(authMiddleware)
app.use('/estados', estadosRouter)

app.listen(8080, () => console.log('Servidor rodando...'))