const camelize = require('camelize');
const connection = require('./connection');

const findAll = async () => {
  const query = `SELECT sp.sale_id, s.date, sp.product_id, sp.quantity
FROM sales_products AS sp
INNER JOIN sales AS s ON sp.sale_id = s.id
ORDER BY sale_id, product_id;`;

const [sales] = await connection.execute(query);

return camelize(sales);
};

const findById = async (salesId) => {
  const query = `SELECT s.date, sp.product_id, sp.quantity
  FROM sales_products AS sp
  INNER JOIN sales AS s ON sp.sale_id = s.id
  WHERE sp.sale_id = ?
  ORDER BY sale_id, product_id;`;
  
  const [salesFoundById] = await connection.execute(query, [salesId]);
  return camelize(salesFoundById);
  };

module.exports = {
  findAll,
  findById,
};