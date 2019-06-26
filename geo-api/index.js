const express = require('express')
const bodyParser = require('body-parser')
const estadosRouter = require('./router/estados')

const app = express()

app.use('/estados', estadosRouter)

app.listen(8080, () => console.log('Servidor rodando...'))