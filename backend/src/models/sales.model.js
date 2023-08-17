const connection = require('../configuration/connection');

const convertCase = (input) => 
input.replace(/_([a-z])/g, (match, letter) => letter.toUpperCase());

const getAll = async () => {
  const [sales] = await connection.execute(`SELECT sp.sale_id, s.date, sp.product_id, sp.quantity 
  FROM sales s 
  INNER JOIN sales_products sp 
  ON s.id = sp.sale_id
  ORDER BY sale_id, product_id;`);

  const convertCaseSales = sales.map((sale) => {
    const camelCase = {};
    Object.keys(sale).forEach((key) => {
      camelCase[convertCase(key)] = sale[key];
    });
    return camelCase;
  });

  return convertCaseSales;
};

const getById = async (salesId) => {
  const [sales] = await connection.execute(`SELECT s.date, sp.product_id, sp.quantity 
  FROM sales s 
  INNER JOIN sales_products sp 
  ON s.id = sp.sale_id
  WHERE sp.sale_id = ? 
  ORDER BY sale_id, product_id;`, [salesId]);

  const convertCaseSales = sales.map((sale) => {
    const camelCase = {};
    Object.keys(sale).forEach((key) => {
      camelCase[convertCase(key)] = sale[key];
    });
    return camelCase;
  });

  return convertCaseSales;
};

module.exports = {
  getAll,
  getById,
};