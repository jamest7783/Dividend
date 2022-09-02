'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Position extends Model {
    static associate(models) {
      Position.hasMany(models.Trade,{foreignKey:'positionId'})
      Position.belongsTo(models.Portfolio,{foreignKey:'portfolioId'})
    }
  }
  Position.init({
    position: DataTypes.INTEGER,
    type: DataTypes.STRING,
    shares: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Position',
    tabelName: 'positions',
  });
  return Position;
};