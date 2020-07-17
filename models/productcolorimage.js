'use strict'
module.exports = (sequelize, DataTypes) => {
  const productColorImage = sequelize.define(
    'productColorImage',
    {
      productColorId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      imageId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      imageViewOrder: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {}
  )
  productColorImage.associate = function (models) {
    productColorImage.belongsTo(models.product)
    productColorImage.belongsTo(models.image)
  }
  return productColorImage
}
