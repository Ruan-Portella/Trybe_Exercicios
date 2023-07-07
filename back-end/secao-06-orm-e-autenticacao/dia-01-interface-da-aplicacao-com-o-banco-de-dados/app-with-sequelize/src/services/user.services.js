const { User } = require('../models');

const getAll = async () => await User.findAll();

const getById = async (id) => await User.findByPk(id);

const getByIdAndEmail = async (id, email) => await User.findOne({ where: { id, email } });

const createUser = async (fullName, email) => await User.create({ fullName, email });

const updateUser = async (id, fullName, email) => await User.update({ fullName, email }, { where: { id } });

const deleteUser = async (id) => await User.destroy({ where: { id } });

module.exports = { getAll, getById, getByIdAndEmail, createUser, updateUser, deleteUser };