const { salesService } = require('../services');
const errorMap = require('../utils/errorMap');

const response = (res, result) => {
    const { status, data } = result;
    return res.status(errorMap(status)).json(data);
  };
  
  const getAll = async (req, res) => {
    const result = await salesService.getAll();
    return response(res, result);
  };
  
  const getById = async (req, res) => {
    const { id } = req.params;
    const result = await salesService.getById(id);
    return response(res, result);
  };
  
  module.exports = {
    getAll,
    getById,
  };