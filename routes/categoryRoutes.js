const express = require('express');
const categoryController = require('../controllers/categoryController');
const api = express.Router();

api.post('/category', categoryController.createCategory);

module.exports = api