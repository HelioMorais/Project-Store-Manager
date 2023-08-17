const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);
const validateSalesFields = require('../../../src/middlewares/validateSalesFields');

describe('Realizando testes de MIDDLEWARES', function () {
  it('Criando uma venda sem o productId em branco - Erro status 400', async function () {
    const noProductId = [
      {
        quantity: 1,
      },
    ];

    const req = { body: noProductId };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    const next = sinon.stub();

    validateSalesFields(req, res, next);

    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith(sinon.match.has('message'));
  });

  it('Criando uma venda sem o quantity em branco - Erro status 400', async function () {
    const noProductId = [
      {
        productId: 1,
      },
    ];

    const req = { body: noProductId };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    const next = sinon.stub();

    validateSalesFields(req, res, next);

    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith(sinon.match.has('message'));
  });

  afterEach(function () {
    sinon.restore();
  });
});