const express = require('express');
//const CIDADES = require('./../models/cidades.json')
const { cidades } = require('./../models/mongo')
const router = express.Router();
const { ObjectId } = require('mongodb')

router.get('/', async (req, res) => {
    const { sigla } = req
    //const cidades = CIDADES.filter(c => c.estado === sigla.toUpperCase())

    const collection = await cidades()
    const result = await collection.find({}).toArray()
   
    if (result) {
        res.json(result)
    }
    else {
        res.sendStatus(404)
    }
});

router.post('/', async (req, res) => {
    const { nome } = req.body
    const { sigla } = req

    const cidade = { nome, estado: sigla.toUpperCase() }

    if (!sigla || !nome) {
        return res.status(400).send('Sigla e Nome são obrigatóros.')
    }

    const collection = await cidades()
    const { result } = await collection.insertOne(cidade)

    if (result.ok) {
        res.sendStatus(201)
    } else {
        res.sendStatus(500)
    }
})

router.get('/:id', async (req, res) => {
    const { sigla } = req
    const { id } = req.params
    //const cidade = CIDADES.find(c => c.estado === sigla.toUpperCase() && c.id === id)
    
    const collection = await cidades()
    const query = { _id: ObjectId(id) }
    const cidade = await collection.findOne(query)

    if (cidade) {
        res.json(cidade)
    }
    else {
        res.sendStatus(404)
    }
});

module.exports = router;