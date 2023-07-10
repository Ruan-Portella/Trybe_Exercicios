'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('employees', [
      {
        first_name: 'John',
        last_name: 'Doe',
        age: 30,
      },
      {
        first_name: 'Jane',
        last_name: 'Doe',
        age: 25,
      },
      {
        first_name: 'Billy',
        last_name: 'Doe',
        age: 15,
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('employees', null, {});
  }
};
