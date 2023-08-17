const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const { productModel } = require('../../../src/models');
const { productsFromDB, productsFromModel, productByIdFromModel } = require('../mocks/products.mock');

describe('Realizando testes - PRODUCTS MODEL', function () {
  it('Recuperando todos os produtos com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([productsFromDB]);

    const responseModel = await productModel.findAll();

    expect(responseModel).to.be.an('array');
    expect(responseModel).to.have.length(3);
    expect(responseModel).to.be.deep.equal(productsFromModel);
  });
  it('Recuperando um produto por id com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([[productByIdFromModel]]);

    const id = 1;

    const responseModel = await productModel.findyById(id);

    expect(responseModel).to.be.an('object');
    expect(responseModel).to.be.deep.equal(productByIdFromModel);
  });
  afterEach(function () {
    sinon.restore();
  });
});