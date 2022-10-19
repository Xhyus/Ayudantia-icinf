const express = require('express');
const api = express.Router();
const cartController = require('../controllers/cartController');

api.get('/carts', cartController.getCart);
api.post('/cart', cartController.createCart);
api.put('/cart/update/:id', cartController.updateCart);
api.delete('/cart/delete/:id', cartController.deleteCart);
api.get('/cart/search/:id', cartController.getCarts);

module.exports = api;