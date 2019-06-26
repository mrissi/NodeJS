const express = require('express');
const ESTADOS = require('./../models/estados.json')
const router = express.Router();
const cidadesRouter = require('./cidades')

router.get('/', (req, res) => {
    res.json(ESTADOS)
});

router.get('/:sigla', (req, res) => {
    const { sigla } = req.params
    const estado = ESTADOS.find(estado => estado.sigla === sigla.toUpperCase())
    
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