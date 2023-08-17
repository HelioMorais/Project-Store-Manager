const productsService = require('../services/product.service');

const getAllProducts = async (req, res) => {
  try {
    const products = await productsService.getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching products' });
  }
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await productsService.getProductById(id);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching product' });
  }
};

const create = async (req, res) => {
  const { name } = req.body;
  try {
    const product = await productsService.create(name);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: 'Error inserting product' });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  create,
};