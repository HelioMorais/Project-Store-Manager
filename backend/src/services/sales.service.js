const { salesModel } = require('../models/index');

const response = (status, data) => ({ status, data });

const getAll = async () => {
  const sales = await salesModel.getAll();
  return response('SUCCESSFUL', sales);
};

const getById = async (salesId) => {
  const sale = await salesModel.getById(salesId);

  if (sale.length === 0) {
    return response('NOT_FOUND', { message: 'Sale not found' });
  }

  return response('SUCCESSFUL', sale);
};

module.exports = {
  getAll,
  getById,
};