'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Trade extends Model {
    static associate(models) {
      // define association here
    }
  }
  Trade.init({
    type: DataTypes.STRING,
    entry: DataTypes.INTEGER,
    exit: DataTypes.INTEGER,
    shares: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Trade',
    tabelName: 'trades',
  });
  return Trade;
};