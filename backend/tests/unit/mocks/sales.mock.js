const salesFromModel = [
  {
    saleId: 1,
    date: '2023-06-28T23:40:51.000Z',
    productId: 1,
    quantity: 5,
  },
  {
    saleId: 1,
    date: '2023-06-28T23:40:51.000Z',
    productId: 2,
    quantity: 10,
  },
  {
    saleId: 2,
    date: '2023-06-28T23:40:51.000Z',
    productId: 3,
    quantity: 15,
  },
];
const salesSuccessful = {
  status: 'SUCCESSFUL',
  data: salesFromModel,
};

const salesFoundById = [
  {
    date: '2023-06-29T13:18:56.000Z',
    productId: 1,
    quantity: 5,
  },
  {
    date: '2023-06-29T13:18:56.000Z',
    productId: 2,
    quantity: 10,
  },
];

const salesByIdSuccessful = {
  status: 'SUCCESSFUL',
  data: salesFoundById,
};

const salesByIdNotFound = {
  status: 'NOT_FOUND',
  data: { message: 'Sale not found' },
};

const salesIdFromDB = { insertId: 4 };

const newSaleFromService = {
  id: 4,
  itemsSold: [
    {
      productId: 1,
      quantity: 1,
    },
    {
      productId: 2,
      quantity: 5,
    },
  ],
};

const newSalesCreated = {
status: 'CREATED',
data: newSaleFromService,
};

module.exports = {
  salesFromModel,
  salesSuccessful,
  salesFoundById,
  salesByIdSuccessful,
  salesByIdNotFound,
  salesIdFromDB,
  newSaleFromService,
  newSalesCreated,
};