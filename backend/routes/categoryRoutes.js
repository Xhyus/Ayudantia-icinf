const express = require('express');
const categoryController = require('../controllers/categoryController');
const api = express.Router();

api.post('/category/:id', categoryController.createCategory);

module.exports = api