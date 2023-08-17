const { salesModel } = require('../models');

const findAll = async () => {
  const sales = await salesModel.findAll();
  return {
    status: 'SUCCESSFUL',
    data: sales,
  };
};

const findById = async (salesId) => {
  const salesFoundById = await salesModel.findById(salesId);
  
  if (salesFoundById.length !== 0) {
  return {
    status: 'SUCCESSFUL',
    data: salesFoundById,
  };
  }
  
  return {
    status: 'NOT_FOUND',
    data: { message: 'Sale not found' },
  };
  };

module.exports = {
  findAll,
  findById,
};