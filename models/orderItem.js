'use strict'
module.exports = (sequelize, DataTypes) => {
  const orderitems = sequelize.define(
    'orderitems',
    {
      orderId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      productColorId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {}
  )
  orderitems.associate = function (models) {
    orderitems.belongsTo(models.order)
    orderitems.belongsTo(models.product)
  }
  return orderitems
}
