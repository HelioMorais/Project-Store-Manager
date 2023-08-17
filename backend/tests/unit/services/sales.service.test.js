const { expect } = require('chai');
const sinon = require('sinon');
const { salesModel } = require('../../../src/models');
const { salesService } = require('../../../src/services');
const {
  allSalesFromModel,
  saleFromModel,
  saleFromServiceNotFound,
} = require('../mocks/sales.mock');

describe('Tests for the SALES SERVICE:', function () {
  beforeEach(function () {
    sinon.restore();
  });

  it('Retrieving all sales successfully', async function () {
    sinon.stub(salesModel, 'getAll').resolves(allSalesFromModel);
    const getAllResponse = await salesService.getAll();

    expect(getAllResponse.status).to.equal('SUCCESSFUL');
    expect(getAllResponse.data).to.deep.equal(allSalesFromModel);
  });

  it('Retrieving sale by id successfully', async function () {
    sinon.stub(salesModel, 'getById').resolves(saleFromModel);
    const inputData = 1;
    const getByIdResponse = await salesService.getById(inputData);

    expect(getByIdResponse.status).to.equal('SUCCESSFUL');
    expect(getByIdResponse.data).to.deep.equal(saleFromModel);
  });

  it('Fails to retrieve non-existing sale by id', async function () {
    sinon.stub(salesModel, 'getById').resolves([]);
    const inputData = 9999;
    const getByIdResponse = await salesService.getById(inputData);

    expect(getByIdResponse.status).to.equal('NOT_FOUND');
    expect(getByIdResponse.data).to.deep.equal(saleFromServiceNotFound.data);
  });
});