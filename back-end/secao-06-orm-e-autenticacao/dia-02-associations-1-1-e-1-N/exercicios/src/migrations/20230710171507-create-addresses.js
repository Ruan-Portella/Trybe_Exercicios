'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('addresses', {
      id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
      },
      city: {
          allowNull: false,
          type: Sequelize.STRING,
      },
      street: {
          allowNull: false,
          type: Sequelize.STRING,
      },
      number: {
          allowNull: false,
          type: Sequelize.INTEGER,
      },
      employeeId: {
          allowNull: false,
          type: Sequelize.INTEGER,
          field: 'employee_id',
          references: {
              model: 'employees',
              key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('addresses');
  }
};
