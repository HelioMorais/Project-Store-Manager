const { idSchema } = require('./schemas');

const validateId = async (id) => {
  const { error } = idSchema.validate(id);
  if (error) {
    return { type: 'INPUT_VALUE', message: '"id" must be a number' };
  }
  return { type: null, message: '' };
};

module.exports = {
  validateId,
};