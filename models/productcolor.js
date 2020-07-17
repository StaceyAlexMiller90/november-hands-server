'use strict'
module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define(
    'productColor',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      discountId: {
        type: DataTypes.INTEGER,
        allowNull: true
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
      foreignKey: 'productId'
    })
    productColor.hasMany(models.image, {
      through: 'productColorImage',
      foreignKey: 'productColorId'
    })
  }
  return product
}
