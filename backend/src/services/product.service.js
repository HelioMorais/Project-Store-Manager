const productModel = require('../models/product.model');

const getAllProducts = async () => {
  const products = await productModel.getAllProducts();
  return products;
};

const getProductById = async (id) => productModel.getProductById(id);

module.exports = {
  getAllProducts,
  getProductById,
};