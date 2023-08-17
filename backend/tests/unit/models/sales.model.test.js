const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const { salesModel } = require('../../../src/models');

const { salesFromModel, salesFoundById, salesIdFromDB } = require('../mocks/sales.mock');

describe('Realizando testes - SALES MODEL', function () {
  it('Recuperando todas as vendas com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([salesFromModel]);
    const responseModel = await salesModel.findAll();
    expect(responseModel).to.be.an('array');
    expect(responseModel).to.have.length(3);
    expect(responseModel).to.be.deep.equal(salesFromModel);
  });

  it('Recuperando vendas por id de venda com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([salesFoundById]);

    const salesId = 1;

    const responseModel = await salesModel.findById(salesId);

    expect(responseModel).to.be.an('array');
    expect(responseModel).to.have.length(2);
    expect(responseModel).to.be.deep.equal(salesFoundById);
  });

  it('Inserindo uma nova venda com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([salesIdFromDB]);

    const newSale = [
      {
        productId: 1,
        quantity: 1,
      },
      {
        productId: 2,
        quantity: 5,
      },
    ];

    const responseModel = await salesModel.insertSales(newSale);

    expect(responseModel).to.be.an('number');
    expect(responseModel).to.be.deep.equal(4);
  });

  afterEach(function () {
    sinon.restore();
  });
});