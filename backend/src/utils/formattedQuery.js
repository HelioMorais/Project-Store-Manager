const snakeize = require('snakeize');

const formattedColumnNames = (object) => Object.keys(snakeize(object)).join(',');

const formattedPlaceholders = (object) => Object.keys(object).map(() => '?').join(',');

const formattedUpdateColumns = (object) => Object.keys(snakeize(object))
  .map((key) => `${key} = ?`)
  .join(', ');

module.exports = {
  formattedColumnNames,
  formattedPlaceholders,
  formattedUpdateColumns,
};