'use strict';
let rol = [
  {
    rol: "user",
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    rol: "admin",
    createdAt: new Date,
    updatedAt: new Date
  }
]
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Rols', rol , {});
    
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Rols', null, {});
     
  }
};
