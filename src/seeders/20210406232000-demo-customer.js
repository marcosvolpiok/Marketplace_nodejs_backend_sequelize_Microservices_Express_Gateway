'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Customers', [
        {id:1, first_name: 'Jordan', last_name: 'Belfort', password: 'encripted', mail: 'aaa@aa.com', address: 'rivadavia 111', phone: '11111111', created_at: new Date(), updated_at: new Date()}
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Customers', null, {});

  }
};
