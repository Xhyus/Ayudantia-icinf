const express = require('express');
const api = express.Router();
const statusController = require('../controllers/statusController');

api.post('/status/:id', statusController.createStatus);
api.get('/statuses', statusController.getStatuses);
api.get('/status/search/:id', statusController.getStatus);
api.put('/status/update/:id', statusController.updateStatus);
api.delete('/status/delete/:id', statusController.deleteStatus);

module.exports = api;