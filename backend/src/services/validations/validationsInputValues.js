const { nameSchema } = require('./schema');

const validateNameProduct = (newProduct) => {
  const { error } = nameSchema.validate(newProduct);
  if (error) {
    return {
      status: 'INVALID_VALUE',
      message: '"name" length must be at least 5 characters long',
    };
  }
};

module.exports = {
  validateNameProduct,
};