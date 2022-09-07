'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
    }
  }
  Order.init({
    date: DataTypes.STRING,
    numShares: DataTypes.INTEGER,
    pricePerShare: DataTypes.FLOAT,
    portfolioId:{
      type:DataTypes.INTEGER,
      onDelete:'CASCADE',
      references:{
        model:'portfolios',
        key:'id'
      }
    },
    equityId:{
      type:DataTypes.INTEGER,
      onDelete:'CASCADE',
      references:{
        model:'equities',
        key:'id'
      }
    },
  }, {
    sequelize,
    modelName: 'Order',
    tableName: 'orders'
  });
  return Order;
};



