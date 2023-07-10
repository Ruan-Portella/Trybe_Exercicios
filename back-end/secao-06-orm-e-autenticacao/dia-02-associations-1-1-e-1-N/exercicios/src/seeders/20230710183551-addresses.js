'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('addresses', [
    {
      city: 'São Paulo',
      street: 'Rua dos Bobos',
      number: 0,
      employee_id: 1,
    }, 
    {
      city: 'São Paulo',
      street: 'Rua Bobos',
      number: 0,
      employee_id: 2,
    },
    {
      city: 'São Paulo',
      street: 'Bobos',
      number: 0,
      employee_id: 3,
    },
    {
      city: 'São Paulo',
      street: 'Touobos',
      number: 0,
      employee_id: 3,
    }
   ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('addresses', null, {});
  }
};
