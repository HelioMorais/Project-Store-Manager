const productModel = require('../models/product.model');

const getAllProducts = async () => {
  const products = await productModel.getAllProducts();
  return products;
};

const getProductById = async (id) => productModel.getProductById(id);

const create = async (name) => productModel.create(name);

module.exports = {
  getAllProducts,
  getProductById,
  create,
};