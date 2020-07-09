'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('orders', 'billingAddressId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'addresses',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    }),
      await queryInterface.addColumn('orders', 'shippingAddressId', {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'addresses',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('orders', 'billingAddressId')
    await queryInterface.removeColumn('orders', 'shippingAddressId')
  }
}
