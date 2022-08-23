const express = require('express');

const router = express.Router();

const productsController = require('../controllers/products');

router.get('/', productsController.getProducts);

router.get('/products', productsController.getProducts);

router.get('/cart', productsController.getCart);

router.get('/checkout');

module.exports = router;
