const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { salesService } = require('../../../src/services');
const { allSalesFromServiceSuccessful, allSalesFromModel, saleFromModel, saleFromServiceSuccessful, 
    saleFromServiceNotFound } = require('../mocks/sales.mock');
const { salesController } = require('../../../src/controllers');

const { expect } = chai;
chai.use(sinonChai);

describe('Sales Controller Tests:', function () {
  afterEach(function () {
    sinon.restore();
  });

  const createMockRequestAndResponse = () => {
    const req = { params: {}, body: {} };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    return { req, res };
  };

  it('Retrieves all sales successfully with Status 200', async function () {
    sinon.stub(salesService, 'getAll').resolves(allSalesFromServiceSuccessful);

    const { req, res } = createMockRequestAndResponse();
    await salesController.getAll(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(allSalesFromModel);
  });

  it('Retrieves a sale by id successfully', async function () {
    sinon.stub(salesService, 'getById').resolves(saleFromServiceSuccessful);

    const { req, res } = createMockRequestAndResponse();
    req.params.id = 1;

    await salesController.getById(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(saleFromModel);
  });

  it('Fails to retrieve a sale with non-existent id and returns status 404', async function () {
    sinon.stub(salesService, 'getById').resolves(saleFromServiceNotFound);

    const { req, res } = createMockRequestAndResponse();
    req.params.id = 9999;

    await salesController.getById(req, res);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith(saleFromServiceNotFound.data);
  });
});