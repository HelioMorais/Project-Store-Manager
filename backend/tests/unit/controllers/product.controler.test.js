// const chai = require('chai');
// const sinon = require('sinon');
// const sinonChai = require('sinon-chai');

// const { expect } = chai;
// chai.use(sinonChai);

// const productService = require('../../../src/services/product.service');
// const productController = require('../../../src/controllers/product.controller');

// describe('Testes do product.controller', function () {
//   describe('Testes do getAllProducts', function () {
//     it('deve fazer busca e retornar todos os produtos', async function () {
//       const mocks = [{ id: 100, name: 'Produto XXX' }, { id: 200, name: 'Produto XXXX' }];
//       sinon.stub(productService, 'getAllProducts').resolves(mocks);
//       const req = {};
//       const res = {
//         status: sinon.stub().returnsThis(),
//         json: sinon.stub(),
//       };
//       await productController.getAllProducts(req, res);
//       expect(res.status).to.be.calledWith(200);
//       expect(res.json).to.be.calledWith(mocks);
//       productService.getAllProducts.restore();
//     });

//     it('deve tratar os erros', async function () {
//       sinon.stub(productService, 'getAllProducts').throws(new Error('DB Error'));
//       const req = {};
//       const res = {
//         status: sinon.stub().returnsThis(),
//         json: sinon.stub(),
//       };
//       await productController.getAllProducts(req, res);
//       expect(res.status).to.be.calledWith(500);
//       expect(res.json).to.be.calledWith({ error: 'Error fetching products' });
//       productService.getAllProducts.restore();
//     });
//   });

//   describe('Testes do getProductById', function () {
//     it('deve fazer buscar e retornar um produto por id', async function () {
//       const mocks = { id: 999, name: 'Produto XXX' };
//       sinon.stub(productService, 'getProductById').resolves(mocks);
//       const req = { params: { id: 999 } };
//       const res = {
//         status: sinon.stub().returnsThis(),
//         json: sinon.stub(),
//       };
//       await productController.getProductById(req, res);
//       expect(res.status).to.be.calledWith(200);
//       expect(res.json).to.be.calledWith(mocks);
//       productService.getProductById.restore();
//     });
//     it('deve tratar erros', async function () {
//       sinon.stub(productService, 'getProductById').throws(new Error('DB Error'));
//       const req = { params: { id: 999 } };
//       const res = {
//         status: sinon.stub().returnsThis(),
//         json: sinon.stub(),
//       };
//       await productController.getProductById(req, res);
//       expect(res.status).to.be.calledWith(500);
//       expect(res.json).to.be.calledWith({ error: 'Error fetching product' });
//       productService.getProductById.restore();
//     });

//     it('deve tratar produto não encontrado', async function () {
//       sinon.stub(productService, 'getProductById').resolves(null);
//       const req = { params: { id: 77 } };
//       const res = {
//         status: sinon.stub().returnsThis(),
//         json: sinon.stub(),
//       };
//       await productController.getProductById(req, res);
//       expect(res.status).to.be.calledWith(404);
//       expect(res.json).to.be.calledWith({ message: 'Product not found' });
//       productService.getProductById.restore();
//     });
//   });
// });

const sinon = require('sinon');
const productsController = require('../../../src/controllers/product.controller');
const productsModels = require('../../../src/models/product.model');
const {

  getAllProductsFromModel,
} = require('../mocks/products.mock');

describe('Products Controller unit tests', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('deve lidar com erros ao buscar produtos', async function () {
    const getAllProductsStub = sinon.stub(productsModels, 'getAllProducts');
    getAllProductsStub.throws(new Error('Database error'));

    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await productsController.getAllProducts({}, res);

    sinon.assert.calledWith(res.status, 500);
    sinon.assert.calledWith(res.json, { error: 'Error fetching products' });

    getAllProductsStub.restore();
  });

  it('deve buscar e retornar todos os produtos', async function () {
    const getAllProductsStub = sinon.stub(productsModels, 'getAllProducts');
    getAllProductsStub.resolves(getAllProductsFromModel);

    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await productsController.getAllProducts({}, res);

    sinon.assert.calledWith(res.status, 200);
    sinon.assert.calledWith(res.json, getAllProductsFromModel);

    getAllProductsStub.restore();
  });
});