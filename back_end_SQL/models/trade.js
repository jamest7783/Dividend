'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Trade extends Model {
    static associate(models) {
      Trade.belongsTo(models.Symbol,{foreignKey:'symbolId'})
      Trade.belongsTo(models.Position,{foreignKey:'positionId'})
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