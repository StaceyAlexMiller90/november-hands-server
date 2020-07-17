'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('productColorImages', 'imageId', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'images',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    }),
      await queryInterface.addColumn('productColorImages', 'productColorId', {
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
    await queryInterface.removeColumn('productColorImages', 'imageId')
    await queryInterface.removeColumn('productColorImages', 'productColorId')
  }
}
