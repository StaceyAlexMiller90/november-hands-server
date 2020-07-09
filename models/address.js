'use strict'
module.exports = (sequelize, DataTypes) => {
  const address = sequelize.define(
    'address',
    {
      addressLine1: {
        type: DataTypes.STRING,
        allowNull: false
      },
      addressLine2: {
        type: DataTypes.STRING,
        allowNull: true
      },
      addressLine3: {
        type: DataTypes.STRING,
        allowNull: true
      },
      addressLine4: {
        type: DataTypes.STRING,
        allowNull: true
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false
      },
      stateProvinceRegion: {
        type: DataTypes.STRING,
        allowNull: true
      },
      zipCode: {
        type: DataTypes.STRING,
        allowNull: false
      },
      phoneNumber: {
        type: DataTypes.INTEGER,
        allowNull: true
      }
    },
    {}
  )
  address.associate = function (models) {
    address.belongsToMany(models.user, {
      through: 'userAddresses',
      foreignKey: 'userId'
    }),
      address.belongsTo(models.order)
  }
  return address
}
