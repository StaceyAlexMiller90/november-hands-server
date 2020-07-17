'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('productColors', 'productId', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'products',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    }),
      await queryInterface.addColumn('productColors', 'colorId', {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'colors',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('productColors', 'productId')
    await queryInterface.removeColumn('productColors', 'colorId')
  }
}
