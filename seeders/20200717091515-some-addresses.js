'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'addresses',
      [
        {
          addressLine1: 'Kostverlorenstraat 25-2',
          city: 'Amsterdam',
          country: 'Netherlands',
          stateProvinceRegion: 'North Holland',
          zipCode: '1052 GT',
          phoneNumber: '0031657251207',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          addressLine1: '57 Shinglewell Road',
          city: 'Erith',
          country: 'England',
          stateProvinceRegion: 'Kent',
          zipCode: 'DA8 1NF',
          phoneNumber: '00447777777777',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          addressLine1: 'Spaarndammerdijk 264',
          city: 'Amsterdam',
          country: 'Netherlands',
          stateProvinceRegion: 'North Holland',
          zipCode: '1013 AP',
          phoneNumber: '00447777777777',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('addresses', null, {})
  }
}
