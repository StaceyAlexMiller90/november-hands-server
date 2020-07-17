'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('productColors', 'discountId', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'discounts',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('productColors', 'discountId')
  }
}
