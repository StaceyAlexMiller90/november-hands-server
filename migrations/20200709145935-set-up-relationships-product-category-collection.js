'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('products', 'categoryId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'categories',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    }),
      await queryInterface.addColumn('products', 'collectionId', {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'collections',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('discounts', 'categoryId')
    await queryInterface.removeColumn('discounts', 'collectionId')
  }
}
