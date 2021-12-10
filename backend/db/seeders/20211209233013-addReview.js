'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [
    {
     rating: 5,
     answer: 'I was recused before I knew what happened!',
     vigilanteId: 1,
     userId: 1,
     createdAt: new Date(),
     updatedAt: new Date(),
     }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
