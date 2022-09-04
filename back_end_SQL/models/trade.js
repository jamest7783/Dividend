'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Trade extends Model {
    static associate(models) {
    }
  }
  Trade.init({
    type: DataTypes.STRING,
    entry: DataTypes.INTEGER,
    exit: DataTypes.INTEGER,
    shares: DataTypes.INTEGER,
    positionId:{
      type:DataTypes.INTEGER,
      onDelete:'CASCADE',
      references:{
        model:'positions',
        key:'id'
      }
    },
    symbolId:{
      type:DataTypes.INTEGER,
      onDelete:'CASCADE',
      references:{
        model:'symbols',
        key:'id'
      }
    },
  }, {
    sequelize,
    modelName: 'Trade',
    tableName: 'trades',
  });
  return Trade;
};