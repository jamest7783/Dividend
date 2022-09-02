'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Portfolio extends Model {
    static associate(models) {
      Portfolio.hasMany(models.Position,{foreignKey:'portfolioId'})
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