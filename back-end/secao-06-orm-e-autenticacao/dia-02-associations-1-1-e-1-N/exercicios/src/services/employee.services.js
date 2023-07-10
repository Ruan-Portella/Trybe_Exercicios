const { Address, Employee } = require('../models');

const getAll = async () => {
    const users = await Employee.findAll({
        include: { model: Address, as: 'addresses' },
    });
    return users;
};

const getById = async (id) => {
    const user = await Employee.findAll({
        where: { id },
    });
    return user;
};

module.exports = { getAll, getById };