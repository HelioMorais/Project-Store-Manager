const joi = require('joi');

const nameSchema = joi.object({
  name: joi.string().min(5),
});

module.exports = {
  nameSchema,
};