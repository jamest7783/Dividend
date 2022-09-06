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
    date: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    price: DataTypes.DECIMAL,
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



