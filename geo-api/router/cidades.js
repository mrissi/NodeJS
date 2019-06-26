const express = require('express');
const CIDADES = require('./../models/cidades.json')
const router = express.Router();

router.get('/', (req, res) => {
    const { sigla } = req
    const cidades = CIDADES.filter(c => c.estado === sigla.toUpperCase())
    
    if (cidades) {
        res.json(cidades)
    }
    else {
        res.sendStatus(404)
    }
});

router.get('/:id', (req, res) => {
    const { sigla } = req
    const { id } = req.params
    const cidade = CIDADES.find(c => c.estado === sigla.toUpperCase() && c.id === id)
    
    if (cidade) {
        res.json(cidade)
    }
    else {
        res.sendStatus(404)
    }
});

module.exports = router;