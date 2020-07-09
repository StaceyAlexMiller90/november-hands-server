'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('userAddresses', 'userId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'users',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    }),
      await queryInterface.addColumn('userAddresses', 'addressId', {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('userAddresses', 'userId')
    await queryInterface.removeColumn('userAddresses', 'addressId')
  }
}
