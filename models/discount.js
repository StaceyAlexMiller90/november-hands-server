'use strict'
module.exports = (sequelize, DataTypes) => {
  const discount = sequelize.define(
    'discount',
    {
      status: {
        type: DataTypes.STRING,
        allowNull: false
      },
      discountPercentage: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {}
  )
  discount.associate = function (models) {}
  return discount
}
