const camelize = require('camelize');
const connection = require('./connection');

const findAll = async () => {
const query = 'SELECT * FROM products ORDER BY id;';

const [products] = await connection.execute(query);
return camelize(products);
};

const findyById = async (productId) => {
  const query = 'SELECT * FROM products WHERE id = ?';
  
  const [[product]] = await connection.execute(query, [productId]);
  
  return camelize(product);
  };

module.exports = {
  findAll,
  findyById,
};