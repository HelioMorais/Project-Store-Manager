const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);
const validateNameExist = require('../../../src/middlewares/validateName');

describe('Realizando testes de MIDDLEWARES', function () {
  it('Criando um produto com o nome em branco - Erro status 400', async function () {
   const req = { body: { name: '' } };
   const res = {
     status: sinon.stub().returnsThis(),
     json: sinon.stub(),
   };
   const next = sinon.stub();
   validateNameExist(req, res, next);
   expect(res.status).to.have.been.calledWith(400);
   expect(res.json).to.have.been.calledWith(sinon.match.has('message'));
  });

  afterEach(function () {
    sinon.restore();
  });
});