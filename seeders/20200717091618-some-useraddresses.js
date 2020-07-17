'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'userAddresses',
      [
        {
          userId: 2,
          addressId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          addressId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 3,
          addressId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('userAddresses', null, {})
  }
}
