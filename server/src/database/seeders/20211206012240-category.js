'use strict';
let category = [
  {
    name: "Ingresos",
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    name: "Egresos",
    createdAt: new Date,
    updatedAt: new Date
  }
]
module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('Categories', category, {});
    
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Categories', null, {});
     
  }
};
