'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Quote extends Model {
    static associate(models) {
      Quote.belongsTo(models.Equity,{foreignKey:'equityId'})
    }
  }
  Quote.init({
    equityId:{
      type:DataTypes.INTEGER,
      onDelete:'CASCADE',
      references:{
        model:'equities',
        key:'id'
      }
    },
    date: DataTypes.INTEGER,
    open: DataTypes.FLOAT,
    high: DataTypes.FLOAT,
    low: DataTypes.FLOAT,
    close: DataTypes.FLOAT,
    volume: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Quote',
    tableName: 'quotes'
  });
  return Quote;
};