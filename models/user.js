'use strict'
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    'user',
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      isAdmin: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      }
    },
    {}
  )
  user.associate = function (models) {
    user.belongsToMany(models.address, {
      through: 'userAddresses',
      foreignKey: 'addressId'
    })
    user.belongsToMany(models.order, {
      through: 'orderItems',
      foreignKey: 'userId'
    })
  }
  return user
}
