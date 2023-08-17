const { productsService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const findAllProducts = async (_req, res) => {
  const { status, data } = await productsService.findAll();
  return res.status(mapStatusHTTP(status)).json(data);
};

const findProductById = async (req, res) => {
  try {
    const productId = Number(req.params.id);
    const { status, data } = await productsService.findById(productId);
    return res.status(mapStatusHTTP(status)).json(data);
  } catch (error) {
    console.error(error.message);
  }
};

const insert = async (req, res) => {
  try {
    const newProduct = req.body;
    const { status, data } = await productsService.insert(newProduct);
    return res.status(mapStatusHTTP(status)).json(data);
  } catch (error) {
    console.error(error.message);
  }
};

const update = async (req, res) => {
  try {
    const productId = Number(req.params.id);
    const productToUpdate = req.body;
    const { status, data } = await productsService.update(productId, productToUpdate);
    return res.status(mapStatusHTTP(status)).json(data);
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  findAllProducts,
  findProductById,
  insert,
  update,
};