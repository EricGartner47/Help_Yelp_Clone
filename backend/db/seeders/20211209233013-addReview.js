'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [
    {
     rating: 5,
     answer: 'I was recused before I knew what happened!',
     vigilanteId: 2,
     userId: 1,
     createdAt: new Date(),
     updatedAt: new Date(),
     },
    {
     rating: 5,
     answer: 'He was faster than a speeding bullet!',
     vigilanteId: 2,
     userId: 1,
     createdAt: new Date(),
     updatedAt: new Date(),
     },
    {
     rating: 5,
     answer: 'He was more powerful than a locomotive!',
     vigilanteId: 2,
     userId: 1,
     createdAt: new Date(),
     updatedAt: new Date(),
     },
    {
     rating: 5,
     answer: 'He was able to leap tall buildings in a single bound!',
     vigilanteId: 2,
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
