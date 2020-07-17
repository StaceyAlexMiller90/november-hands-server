'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'orders',
      [
        {
          userId: 2,
          name: 'Stacey Miller',
          billingAddressId: 1,
          shippingAddressId: 2,
          status: 'In progress',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 3,
          name: 'Lynne Grey',
          billingAddressId: 3,
          shippingAddressId: 3,
          status: 'Shipped',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('orders', null, {})
  }
}
