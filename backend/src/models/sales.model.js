const camelize = require('camelize');
const connection = require('./connection');
const { formattedColumnNames, formattedPlaceholders } = require('../utils/formattedQuery');

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

const insertSalesProducts = async (newSales, saleId) => {
  let insertPromises = [];
  insertPromises = newSales.map((sale) => {
    const collumns = formattedColumnNames(sale);
    const placeholders = formattedPlaceholders(sale);
    const values = Object.values(sale);
    const query = `INSERT INTO sales_products (sale_id, ${collumns}) VALUES (?, ${placeholders})`;
    return connection.execute(query, [saleId, ...values]);
  });

  await Promise.all(insertPromises);
};

const insertSales = async (newSales) => {
  const saleDate = new Date();
  const query = 'INSERT INTO sales (date) VALUE (?);';

  const [{ insertId }] = await connection.execute(query, [saleDate]);

  await insertSalesProducts(newSales, insertId);

  return insertId;
  };

module.exports = {
  findAll,
  findById,
  insertSales,
};