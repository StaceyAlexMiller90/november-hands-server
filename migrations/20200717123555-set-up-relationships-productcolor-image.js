'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('productImages', 'imageId', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'images',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    }),
      await queryInterface.addColumn('productImages', 'productColorId', {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'productColors',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('productImages', 'imageId')
    await queryInterface.removeColumn('productImages', 'productColorId')
  }
}
