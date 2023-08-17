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

const insertIdProductCreated = { insertId: 4 };

const createdProduct = {
  id: 4,
  name: 'ProdutoX',
};

const productFromServiceCreated = {
    status: 'CREATED',
    data: createdProduct,
};

module.exports = {
  productsFromDB,
  productsFromModel,
  productsFromServiceSuccessful,
  productByIdFromModel,
  productsFromServiceNotFound,
  productsIDFromServiceSuccessful,
  insertIdProductCreated,
  productFromServiceCreated,
  createdProduct,
};