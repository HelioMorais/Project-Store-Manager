const express = require('express');
const { productsController } = require('../controllers');
const validadeNameExist = require('../middlewares/validateName');

const route = express.Router();

route.get('/', productsController.findAllProducts);
route.get('/:id', productsController.findProductById);
route.post('/', validadeNameExist, productsController.insert);
route.put('/:id', validadeNameExist, productsController.update);
route.delete('/:id', productsController.remove);
module.exports = route;