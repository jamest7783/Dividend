'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Equity extends Model {
    static associate(models) {
      // define association here
    }
  }
  Equity.init({
    symbol: DataTypes.STRING,
    company: DataTypes.STRING,
    icon: DataTypes.STRING,
    value: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Equity',
    tabelName: 'equity',
  });
  return Equity;
};