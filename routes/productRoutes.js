const express = require('express');
const productController = require('../controllers/productController');
const api = express.Router();

api.post('/product', productController.createProduct);

module.exports = api