'use strict'
module.exports = (sequelize, DataTypes) => {
  const productColor = sequelize.define(
    'productColor',
    {
      productId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      colorId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      discountId: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      active: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      stockQuantity: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      collectionId: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {}
  )
  productColor.associate = function (models) {
    productColor.belongsTo(models.category)
    productColor.belongsTo(models.collection)
    productColor.hasOne(models.discount)
    productColor.belongsToMany(models.order, {
      through: 'orderItems',
      foreignKey: 'productColorId'
    })
    productColor.belongsToMany(models.image, {
      through: 'productColorImages',
      foreignKey: 'productColorId'
    })
  }
  return productColor
}
