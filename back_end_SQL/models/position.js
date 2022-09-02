'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Position extends Model {
    static associate(models) {
      // define association here
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