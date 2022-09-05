'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Position extends Model {
    static associate(models) {
      Position.belongsTo(models.Portfolio,{foreignKey:'portfolioId'})
      Position.belongsToMany(models.Symbol,{
        through:models.Trade,
        as:'positions',             // why plural?
        foreignKey:'positionId'
      })
    }
  }
  Position.init({
    position:{type:DataTypes.INTEGER,defaultValue:0},
    type:{type:DataTypes.STRING,defaultValue:''},
    shares:{type:DataTypes.INTEGER,defaultValue:0},
    portfolioId:{
      type:DataTypes.INTEGER,
      onDelete:'CASCADE',
      references:{
        model:'portfolios',
        key:'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Position',
    tableName: 'positions',
  });
  return Position;
};