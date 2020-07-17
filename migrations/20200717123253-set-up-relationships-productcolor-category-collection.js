'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('productColors', 'categoryId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'categories',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    }),
      await queryInterface.addColumn('productColors', 'collectionId', {
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
    await queryInterface.removeColumn('productColors', 'categoryId')
    await queryInterface.removeColumn('productColors', 'collectionId')
  }
}
