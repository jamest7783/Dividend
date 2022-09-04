'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Symbol extends Model {
    static associate(models) {
      // Symbol.belongsToMany(models.Position,{
      //   as:'symbol',
      //   through:models.Trade,
      //   foreignKey:'symbolId'
      // })
    }
  }
  Symbol.init({
    symbol: DataTypes.STRING,
    company: DataTypes.STRING,
    icon: DataTypes.STRING,
    value: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Symbol',
    modelName: 'symbols',
  });
  return Symbol;
};