const { expect } = require('chai');
const sinon = require('sinon');
const { salesModel } = require('../../../src/models');
const { salesService } = require('../../../src/services');
const { salesFromModel, newSaleFromService } = require('../mocks/sales.mock');

describe('Realizando testes - SALES SERVICE', function () {
  it('Recuperando todas as vendas com sucesso', async function () {
    sinon.stub(salesModel, 'findAll').resolves(salesFromModel);
    const responseService = await salesService.findAll();
    
    expect(responseService.status).to.be.equal('SUCCESSFUL');
    expect(responseService.data).to.be.an('array');
    expect(responseService.data).to.have.lengthOf(3);
    expect(responseService.data).to.be.deep.equal(salesFromModel);
  });

  it('Recuperando vendas por id de vendas com sucesso', async function () {
    sinon.stub(salesModel, 'findById').resolves(salesFromModel);

    const saleId = 1;
    const responseService = await salesService.findById(saleId);

    expect(responseService.status).to.be.equal('SUCCESSFUL');
    expect(responseService.data).to.be.an('array');
    expect(responseService.data).to.be.deep.equal(salesFromModel);
  });

  it('Recuperando um produto por id sem sucesso', async function () {
    sinon.stub(salesModel, 'findById').resolves([]);

    const saleId = 10;
    const responseService = await salesService.findById(saleId);

    expect(responseService.status).to.be.equal('NOT_FOUND');
    expect(responseService.data).to.be.an('object');
    expect(responseService.data).to.be.deep.equal({ message: 'Sale not found' });
  });

  it('Inserindo uma nova venda com sucesso', async function () {
    sinon.stub(salesModel, 'insertSales').resolves(4);

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
    const responseService = await salesService.insert(newSale);

    expect(responseService.status).to.be.equal('CREATED');
    expect(responseService.data).to.be.an('object');
    expect(responseService.data).to.be.deep.equal(newSaleFromService);
  });

  afterEach(function () {
    sinon.restore();
  });
});