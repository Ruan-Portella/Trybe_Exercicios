const connection = require('./connection');

const insert = ({ nome, descricao }) => connection.execute(
    'INSERT INTO tasks(nome, descricao) VALUES (?, ?)',
    [nome, descricao],
)

const update = ({ nome, descricao}, id) => connection.execute(
    'UPDATE tasks SET nome = ?, descricao = ? WHERE id = ?',
    [nome, descricao, id],
  );
  
  const remove = (id) => connection.execute(
    'DELETE FROM tasks WHERE id = ?',
    [id],
  );
  
  const findAll = () => connection.execute(
    'SELECT * FROM tasks',
  );
  
  const findById = (id) => connection.execute(
    'SELECT * FROM tasks WHERE id = ?',
    [id],
  );
  
  module.exports = {
    insert,
    update,
    remove,
    findAll,
    findById,
  };