'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Heros', [
     {title: 'Batman',
     description: "World's Greatest Detective",
     city: "Gotham",
     powers: "Genius level intellect, Peak human condition, Expert martial artist",
     createdAt: new Date(),
     updatedAt: new Date(),
     heroId: 2
     },
     {title: 'Superman',
     description: "Truth, justice, and the American way",
     city: "Metropolis",
     powers: "Superhuman strength, Superhuman speed, Flight",
     createdAt: new Date(),
     updatedAt: new Date(),
     heroId: 3
     },
     {title: 'Wonder Woman',
     description: "I will fight for those who cannot fight for themselves",
     city: "Themyscira",
     powers: "Superhuman strength, Expert in Hand to Hand Combat, Superhuman Durability",
     createdAt: new Date(),
     updatedAt: new Date(),
     heroId: 4
     }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Heros', null, {});
  }
};
