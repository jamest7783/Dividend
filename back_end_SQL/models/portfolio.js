'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Portfolio extends Model {
    static associate(models) {
      // define association here
    }
  }
  Portfolio.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    capital: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Portfolio',
    tableName: 'portfolios'
  });
  return Portfolio;
};