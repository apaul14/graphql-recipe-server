'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Recipes', {
      userId: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false
    },
    title: {
        allowNull: false,
        type: Sequelize.STRING
    },
    ingredients: {
        allowNull: false,
        type: Sequelize.STRING
    },
    direction: {
        allowNull: false,
        type: Sequelize.STRING
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Recipes');
  }
};