'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Users', 
  [
    {
    fullName: 'Sara',
    email: 'sara@gmail.com',
    createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
    fullName: 'João',
    email: 'joao@gmail.com',
    createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
], {}),

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {}),
};
