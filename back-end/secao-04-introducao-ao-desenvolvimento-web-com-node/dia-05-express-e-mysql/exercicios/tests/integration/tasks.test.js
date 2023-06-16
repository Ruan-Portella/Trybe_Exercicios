const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');

const app = require('../../src/app');
const connection = require('../../src/db/connection');

const { expect, use } = chai;

use(chaiHttp);

const taskList = [
    {
      "id": 1,
      "nome": "Comprar pão doce",
      "descricao": "Café da manhã"
    },
    {
      "id": 2,
      "nome": "Lavar louca",
      "descricao": "Afazeres domésticos"
    }
  ];

describe('Testando os endpoints de tasks', function () {
  it('Testando o cadastro de uma tarefa ', async function () {
    sinon.stub(connection, 'execute').resolves([{ insertId: 42 }]);

    const response = await chai
      .request(app)
      .post('/tasks')
      .send(
        {
          nome: 'Ibis Futebol Clube',
          descricao: 'Clube de futebol registrado',
        },
      );

    expect(response.status).to.equal(201);
    expect(response.body).to.
      deep.equal({ message: 'Tarefa cadastrada com sucesso com o id 42' });
  });

  it('Testando a alteração de uma tarefa com o id 1', async function () {
    sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);
    const response = await chai
      .request(app)
      .put('/tasks/1')
      .send(
        {
          nome: 'Ibiszão',
          descricao: 'Fã Clube de futebol registrado do IBIS',
        },
      );

    expect(response.status).to.equal(200);
    expect(response.body).to
      .deep.equal({ message: 'Tarefa de id 1 atualizada com sucesso' });
  });

  it('Testando a exclusão da tarefa com id 1', async function () {
    sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);
    const response = await chai
      .request(app)
      .delete('/tasks/1');

    expect(response.status).to.equal(200);
    expect(response.body).to
      .deep.equal({ message: 'Tarefa de id 1 excluída com sucesso' });
  });

  it('Testando a listagem de todas as tarefas', async function () {
    sinon.stub(connection, 'execute').resolves([taskList]);
    const response = await chai
      .request(app)
      .get('/tasks');

    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal(taskList);
  });


  it('Testando a listagem da tarefa com id 1', async function () {
    sinon.stub(connection, 'execute').resolves([[taskList[0]]]);
    const response = await chai
      .request(app)
      .get('/tasks/1');

    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal(taskList[0]);
  });
  afterEach(sinon.restore);
});