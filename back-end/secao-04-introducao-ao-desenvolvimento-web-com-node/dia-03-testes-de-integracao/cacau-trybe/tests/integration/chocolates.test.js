const chai = require('chai');
const { expect } = chai;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const app = require('../../src/app')
const sinon = require('sinon');
const fs = require('fs');

const mockFile = JSON.stringify({ 
    brands: [
      {
        id: 1,
        name: 'Lindt & Sprungli',
      },
      {
        id: 2,
        name: 'Ferrero',
      },
      {
        id: 3,
        name: 'Ghirardelli',
      },
    ],
    chocolates: [
      {
        id: 1,
        name: 'Mint Intense',
        brandId: 1,
      },
      {
        id: 2,
        name: 'White Coconut',
        brandId: 1,
      },
      {
        id: 3,
        name: 'Mon Chéri',
        brandId: 2,
      },
      {
        id: 4,
        name: 'Mounds',
        brandId: 3,
      },
    ],
  });

describe('Usando o método GET em /chocolates', function() {
    beforeEach(function () {
        sinon.stub(fs.promises, 'readFile')
          .resolves(mockFile);
      });
    
      afterEach(function () {
        sinon.restore();
      });

    it('Retorna a lista completa de chocolates!', async function() {
        const output = [
            {  id: 1, name: 'Mint Intense', brandId: 1 },
            {  id: 2, name: 'White Coconut', brandId: 1 },
            {  id: 3, name: 'Mon Chéri', brandId: 2 },
            {  id: 4, name: 'Mounds', brandId: 3 },
        ]

        const response = await chai.request(app).get('/chocolates');
        expect(response.status).to.be.equal(200);
        expect(response.body.chocolates).to.deep.equal(output);
    })
});

// tests/integration/chocolates.test.js

//describe('Testando a API Cacau Trybe', function () {

//...

describe('Usando o método GET em /chocolates/:id para buscar o ID 4', function () {
    it('Retorna o chocolate Mounds', async function () {
      const response = await chai
        .request(app)
        .get('/chocolates/4');

      expect(response.status).to.be.equal(200);
      expect(response.body.chocolate).to.deep.equal(
        {
          id: 4,
          name: 'Mounds',
          brandId: 3,
        });
    });
  });

  describe('Usando o método GET em /chocolates/:id para buscar o ID 99', function () {
    it('Retorna status 404 com a mensagem "Chocolate not found"', async function () {
      const response = await chai
        .request(app)
        .get('/chocolates/99');

      expect(response.status).to.be.equal(404);
      expect(response.body).to.deep.equal({ message: 'Chocolate not found' })
    });
  });

  describe('Usando o método GET em /chocolates/brand/:brandId para buscar brandId 1', function () {
    it('Retorna os chocolates da marca Lindt & Sprungli', async function () {
      const response = await chai
        .request(app)
        .get('/chocolates/brand/1');

      expect(response.status).to.be.equal(200);
      expect(response.body.chocolates).to.deep.equal([
        {
          id: 1,
          name: 'Mint Intense',
          brandId: 1,
        },
        {
          id: 2,
          name: 'White Coconut',
          brandId: 1,
        },
      ]);
    });
  });
//});