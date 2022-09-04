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
    position: DataTypes.INTEGER,
    type: DataTypes.STRING,
    shares: DataTypes.INTEGER,
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