const express = require('express')
const router = express.Router()

const products = [
    { id: '1', name: 'iPhone' },
    { id: '2', name: 'iPad' }
]

router.get('/', (req, res) => {
    console.log('data atual:', req.dataAtual)
    res.json(products)
})

router.get('/:productId', (req, res) => {
    const { productId } = req.params
    const product = products.find(p => p.id === productId)
    
    if (product) {
        res.json(product)
    }
    else {
        res.sendStatus(404)
    }
    
})

module.exports = router