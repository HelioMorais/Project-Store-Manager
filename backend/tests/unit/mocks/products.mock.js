const productsFromDB = [
  {
    id: 1,
    name: 'Martelo de Thor',
  },
  {
    id: 2,
    name: 'Traje de encolhimento',
  },
  {
    id: 3,
    name: 'Escudo do CapitÃ£o AmÃ©rica',
  },
];

const productsFromModel = [
  {
    id: 1,
    name: 'Martelo de Thor',
  },
  {
    id: 2,
    name: 'Traje de encolhimento',
  },
  {
    id: 3,
    name: 'Escudo do CapitÃ£o AmÃ©rica',
  },
];

const productByIdFromModel = {
  id: 1,
  name: 'Martelo de Thor',
};

const productsFromServiceSuccessful = {
  status: 'SUCCESSFUL',
  data: productsFromModel,
};

const productsIDFromServiceSuccessful = {
  status: 'SUCCESSFUL',
  data: productByIdFromModel,
};

const productsFromServiceNotFound = {
  status: 'NOT_FOUND',
  data: { message: 'Product not found' },
};

module.exports = {
  productsFromDB,
  productsFromModel,
  productsFromServiceSuccessful,
  productByIdFromModel,
  productsFromServiceNotFound,
  productsIDFromServiceSuccessful,
};