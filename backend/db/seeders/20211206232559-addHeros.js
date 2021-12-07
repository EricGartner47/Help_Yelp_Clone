'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Heros', [
     {title: 'Batman',
     description: "World's Greatest Detective",
     address: "Crime Alley",
     city: "Gotham",
     state: "New Jersey",
     zipCode: 08270,
     powers: "Genius level intellect, Peak human condition, Expert martial artist",
     createdAt: new Date(),
     updatedAt: new Date()
     },
     {title: 'Superman',
     description: "Truth, justice, and the American way",
     address: "344 Clinton Street, Apartment 3D",
     city: "Metropolis",
     state: "Delaware",
     zipCode: 19901,
     powers: "Superhuman strength, Superhuman speed, Flight",
     createdAt: new Date(),
     updatedAt: new Date()
     },
     {title: 'Wonder Woman',
     description: "I will fight for those who cannot fight for themselves",
     address: "Paradise Island",
     city: "Themyscira",
     state: "n/a",
     zipCode: 84001,
     powers: "Superhuman strength, Expert in Hand to Hand Combat, Superhuman Durability",
     createdAt: new Date(),
     updatedAt: new Date()
     }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Heros', null, {});
  }
};
