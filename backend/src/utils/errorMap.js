const errorMap = {
    PRODUCT_NOT_FOUND: 404,
    INPUT_VALUE: 422,
  };
  
  const mapError = (error) => errorMap[error] || '500';
  
  module.exports = {
    errorMap,
    mapError,
  };