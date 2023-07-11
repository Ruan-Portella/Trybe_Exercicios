'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          first_name: 'Graciliano',
          last_name: 'Ramos',
          age: 61,
        },
        {
          first_name: 'Brené',
          last_name: 'Brown',
          age: 56,
        },
        {
          first_name: 'Djamila',
          last_name: 'Ribeiro',
          age: 42,
        },
      ],
      {},
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
