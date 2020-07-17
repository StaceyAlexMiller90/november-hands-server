'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
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
    await queryInterface.removeColumn('productColors', 'collectionId')
  }
}
