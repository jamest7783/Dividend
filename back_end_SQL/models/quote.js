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
    date: DataTypes.NUMBER,
    open: DataTypes.NUMBER,
    high: DataTypes.NUMBER,
    low: DataTypes.NUMBER,
    close: DataTypes.NUMBER,
    volume: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'Quote',
    tableName: 'quotes'
  });
  return Quote;
};