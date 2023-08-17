const route = require('express').Router();
const { salesController } = require('../controllers');

route.get('/', salesController.findAllSales);
route.get('/:id', salesController.findById);

module.exports = route;