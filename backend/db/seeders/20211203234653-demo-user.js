'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        username: 'Demo-lition',
        email: 'demo@user.io',
        hashedPassword: bcrypt.hashSync('password'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'Bats',
        email: 'batman@batman.com',
        hashedPassword: bcrypt.hashSync('detective'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'Supes',
        email: 'supes@supes.com',
        hashedPassword: bcrypt.hashSync('krypton'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'WonderWoman',
        email: 'wonderwoman@ww.com',
        hashedPassword: bcrypt.hashSync('hippolyta'),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'Bats', 'Supes', 'WonderWoman'] }
    }, {});
  }
}
