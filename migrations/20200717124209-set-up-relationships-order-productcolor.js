'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('orderItems', 'orderId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'orders',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    }),
      await queryInterface.addColumn('orderItems', 'productColorId', {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'productColors',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('orderItems', 'orderId')
    await queryInterface.removeColumn('orderItems', 'productColorId')
  }
}
