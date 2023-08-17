const { expect } = require('chai');
const sinon = require('sinon');
const modelsDeProdutos = require('../../../src/models/product.model');
const connection = require('../../../src/configuration/connection');
const {
  getAllProductsFromDB,
  getAllProductsFromModel,
  getProductByIdFromDB,
  getProductByIdFromModel,
} = require('../mocks/products.mock');

describe('Testes unitários dos Modelos de Produtos', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('getAllProducts deve retornar um array com todos os produtos', async function () {
    sinon.stub(connection, 'execute').resolves(getAllProductsFromDB);
    const produtos = await modelsDeProdutos.getAllProducts();
    expect(produtos).to.be.an('array');
    expect(produtos).to.have.lengthOf(3);
    expect(produtos).to.deep.equal(getAllProductsFromModel);
  });

  it('getProductById deve retornar um objeto com o produto', async function () {
    sinon.stub(connection, 'execute').resolves(getProductByIdFromDB);
    const produto = await modelsDeProdutos.getProductById(1);
    expect(produto).to.be.an('object');
    expect(produto).to.deep.equal(getProductByIdFromModel);
  });
});