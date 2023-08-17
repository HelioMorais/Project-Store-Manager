const checkRequiredFields = require('../utils/checkRequiredFields');

const validateSalesFields = (req, res, next) => {
const { body } = req;

const requiredSalesField = ['productId', 'quantity'];

const salesError = body.map((sale) => checkRequiredFields(sale, requiredSalesField));

const filterErrorMessage = salesError.filter((e) => e !== undefined);

if (filterErrorMessage.length > 0) {
  return res.status(400).json({ message: filterErrorMessage[0] });
}

next();
};

module.exports = validateSalesFields;