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

module.exports = {
  findAllProducts,
  findProductById,
};