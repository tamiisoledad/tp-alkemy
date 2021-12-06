'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Operation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Operation.belongsTo(models.Category,{
        as : 'category',
        foreignKey: "categoryId"
      })
    }
  };
  Operation.init({
    quantity: DataTypes.DECIMAL,
    categoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Operation',
  });
  return Operation;
};