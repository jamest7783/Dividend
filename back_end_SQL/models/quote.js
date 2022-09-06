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
    open: DataTypes.DECIMAL,
    high: DataTypes.DECIMAL,
    low: DataTypes.DECIMAL,
    close: DataTypes.DECIMAL,
    volume: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Quote',
    tableName: 'quotes'
  });
  return Quote;
};