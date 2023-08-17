const { expect } = require('chai');
const sinon = require('sinon');
const { productModel } = require('../../../src/models');
const { productsService } = require('../../../src/services');

const { productsFromDB, productsFromModel, productByIdFromModel, createdProduct } = require('../mocks/products.mock');

describe('Realizando testes - PRODUCTS SERVICE', function () {
  it('Recuperando todos os produtos com sucesso', async function () {
    sinon.stub(productModel, 'findAll').resolves(productsFromDB);

    const responseService = await productsService.findAll();

    expect(responseService.status).to.be.equal('SUCCESSFUL');
    expect(responseService.data).to.be.an('array');
    expect(responseService.data).to.have.lengthOf(3);
    expect(responseService.data).to.be.deep.equal(productsFromModel);
  });
  it('Recuperando um produto por id com sucesso', async function () {
    sinon.stub(productModel, 'findyById').resolves(productByIdFromModel);

    const id = 1;
    const responseService = await productsService.findById(id);

    expect(responseService.status).to.be.equal('SUCCESSFUL');
    expect(responseService.data).to.be.an('object');
    expect(responseService.data).to.be.deep.equal(productByIdFromModel);
  });
  it('Recuperando um produto por id sem sucesso', async function () {
    sinon.stub(productModel, 'findyById').resolves(undefined);

    const id = 100;
    const responseService = await productsService.findById(id);

    expect(responseService.status).to.be.equal('NOT_FOUND');
    expect(responseService.data).to.be.an('object');
    expect(responseService.data).to.be.deep.equal({ message: 'Product not found' });
  });

  it('Inserindo um novo produto', async function () {
    sinon.stub(productModel, 'insert').resolves(4);
    sinon.stub(productModel, 'findyById').resolves(createdProduct);

    const newProduct = {
      name: 'ProdutoX',
    };

    const responseService = await productsService.insert(newProduct);

    expect(responseService.status).to.be.equal('CREATED');
    expect(responseService.data).to.be.an('object');
    expect(responseService.data).to.be.deep.equal(createdProduct);
  });

  it('Error ao inserir um novo produto com o nome menor do que 5 caracteres', async function () {
    const newProduct = {
      name: 'Prod',
    };

    const responseService = await productsService.insert(newProduct);

    expect(responseService.status).to.be.equal('INVALID_VALUE');
    expect(responseService.data).to.be.an('object');
    expect(responseService.data).to.be.deep.equal({ message: '"name" length must be at least 5 characters long' });
  });

  afterEach(function () {
    sinon.restore();
  });
});