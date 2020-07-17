'use strict'
module.exports = (sequelize, DataTypes) => {
  const discount = sequelize.define(
    'discount',
    {
      description: {
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
  discount.associate = function (models) {
    discount.belongsTo(models.productColor)
  }
  return discount
}
