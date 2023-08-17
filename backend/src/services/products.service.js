const { productModel } = require('../models');

const findAll = async () => {
  const products = await productModel.findAll();
  return {
    status: 'SUCCESSFUL',
    data: products,
  };
};

const findById = async (productId) => {
  const product = await productModel.findyById(productId);
  if (product) {
    return {
      status: 'SUCCESSFUL',
      data: product,
    };
  }
  return { status: 'NOT_FOUND', data: { message: 'Product not found' } };
};

const insert = async (newProduct) => {
  const insertId = await productModel.insert(newProduct);

  const newProductInserted = await productModel.findyById(insertId);
  if (newProductInserted) {
    return {
      status: 'CREATED',
      data: newProductInserted,
    };
  }
};

module.exports = {
  findAll,
  findById,
  insert,
};