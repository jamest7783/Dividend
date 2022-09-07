'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Equity extends Model {
    static associate(models) {
      Equity.hasMany(models.Quote,{foreignKey:'equityId'})
      Equity.belongsToMany(models.Portfolio,{
        through:'orders',
        as:'equities',
        foreignKey:'equityId'
      })
    }
  }
  Equity.init({
    ticker: DataTypes.STRING,
    company:{type:DataTypes.STRING,defaultValue:'company name'},  
    icon:{type:DataTypes.STRING,defaultValue:'icon url'},
  }, {
    sequelize,
    modelName: 'Equity',
    tableName: 'equities'
  });
  return Equity;
};