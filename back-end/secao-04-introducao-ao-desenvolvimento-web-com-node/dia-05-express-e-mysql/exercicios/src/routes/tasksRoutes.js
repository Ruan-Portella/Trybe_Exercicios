const express = require('express');
const tasksDB = require('../db/tasksDB');
const router = express.Router();

router.post('/', async (req, res) => {
  const task = req.body;
  try {
    const [result] = await tasksDB.insert(task);
    res.status(201).json({
      message: `Tarefa cadastrada com sucesso com o id ${result.insertId}` });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Ocorreu um erro ao cadastrar uma tarefa' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const person = req.body;
    const [result] = await tasksDB.update(person, id);
    if (result.affectedRows > 0) {
      res.status(200).json({ message: `Tarefa de id ${id} atualizada com sucesso` });
    } else {
      res.status(404).json({ message: 'Tarefa não encontrada' });
    }
  } catch (err) {
    res.status(500).json({ message: err.sqlMessage });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await tasksDB.remove(id);
    if (result.affectedRows > 0) {
      res.status(200).json({ message: `Tarefa de id ${id} excluída com sucesso` });
    } else {
      res.status(404).json({ message: 'Tarefa não encontrada' });
    }
  } catch (err) {
    res.status(500).json({ message: err.sqlMessage });
  }
});

router.get('/', async (_req, res) => {
  try {
    const [result] = await tasksDB.findAll();
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.sqlMessage });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [[result]] = await tasksDB.findById(id);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: 'Tarefa não encontrada' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.sqlMessage });
  }
});

module.exports = router;