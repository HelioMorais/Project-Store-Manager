const errorMap = {
    PRODUCT_NOT_FOUND: 404,
    INPUT_VALUE: 422,
    NOT_FOUND: 404,
    CREATED: 201,
    SUCCESSFUL: 200,
  };
  
  const mapError = (error) => errorMap[error] || '500';
  
  module.exports = {
    errorMap,
    mapError,
  };