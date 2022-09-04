'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Portfolio extends Model {
    static associate(models) {
      Portfolio.hasMany(models.Position,{foreignKey:'portfolioId'})
    }
  }
  Portfolio.init({
    name:{
      type:DataTypes.STRING,
      defaultValue:'portfolio'
    },
    description:{
      type:DataTypes.STRING,
      defaultValue:''
    },
    capital:{
      type:DataTypes.INTEGER,
      defaultValue:0
    }
  }, {
    sequelize,
    modelName: 'Portfolio',
    tableName: 'portfolios'
  });
  return Portfolio;
};