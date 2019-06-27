const express = require('express');
//const ESTADOS = require('./../models/estados.json')
const { estados } = require('./../models/mongo')
const router = express.Router();
const cidadesRouter = require('./cidades')

router.get('/', async (req, res) => {
    //res.json(ESTADOS)
    const collection = await estados()
    const result = await collection.find({}).toArray()
    res.json(result)
});

router.post('/', async (req, res) => {
    const { sigla, nome } = req.body
    const estado = { sigla, nome }

    if (!sigla || !nome) {
        return res.status(400).send('Sigla e Nome são obrigatóros.')
    }

    const collection = await estados()
    const { result } = await collection.insertOne(estado)

    if (result.ok) {
        res.sendStatus(201)
    } else {
        res.sendStatus(500)
    }
})

router.get('/:sigla', async (req, res) => {
    const { sigla } = req.params
    //const estado = ESTADOS.find(estado => estado.sigla === sigla.toUpperCase())

    const collection = await estados()
    const query = { sigla: { $regex: sigla, $options: 'i' } }
    const estado = await collection.findOne(query)

    if (estado) {
        res.json(estado)
    }
    else {
        res.sendStatus(404)
    }
});

router.use('/:sigla/cidades', (req, res, next) => {
    req.sigla = req.params.sigla
    next()
}, cidadesRouter)

module.exports = router;