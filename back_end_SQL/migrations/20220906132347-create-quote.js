'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('quotes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      equityId:{
        type:Sequelize.INTEGER,
        onDelete:'CASCADE',
        references:{
          model:'equities',
          key:'id'
        }
      },
      date: {
        type: Sequelize.NUMBER
      },
      open: {
        type: Sequelize.NUMBER
      },
      high: {
        type: Sequelize.NUMBER
      },
      low: {
        type: Sequelize.NUMBER
      },
      close: {
        type: Sequelize.NUMBER
      },
      volume: {
        type: Sequelize.NUMBER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('quotes');
  }
};