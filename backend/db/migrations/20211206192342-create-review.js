'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Reviews', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        onDelete: 'CASCADE',
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Users'}
      },
      vigilanteId: {
        onDelete: 'CASCADE',
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Heros'}
      },
      rating: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      answer: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Reviews');
  }
};
