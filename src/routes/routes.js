const router = require('express').Router()

const ProductControlle = require('../controllers/products_controller')

router.get('/products', ProductControlle.get)
// router.post('/products', ProductControlle.post)
// router.put('/products/:id', ProductControlle.put)
// router.delete('/products/:id', ProductControlle.delete)

module.exports = router