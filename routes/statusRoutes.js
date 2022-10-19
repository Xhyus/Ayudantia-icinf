const express = require('express');
const api = express.Router();
const statusController = require('../controllers/statusController');

api.post('/status', statusController.createStatus);
api.get('/statuses', statusController.getStatuses);
api.get('/status/:id', statusController.getStatus);
api.put('/status/:id', statusController.updateStatus);
api.delete('/status/:id', statusController.deleteStatus);

module.exports = api;