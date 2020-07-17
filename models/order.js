'use strict'
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define(
    'order',
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      billingAddressId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      shippingAddressId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {}
  )
  order.associate = function (models) {
    order.hasOne(models.address)
    order.belongsTo(models.user)
    order.belongsToMany(models.productColor, {
      through: 'orderItems',
      foreignKey: 'orderId'
    })
  }
  return order
}
