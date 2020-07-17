'use strict'
module.exports = (sequelize, DataTypes) => {
  const image = sequelize.define(
    'image',
    {
      path: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {}
  )
  image.associate = function (models) {
    image.belongsToMany(models.productColor, {
      through: 'productColorImage',
      foreignKey: 'imageId'
    })
  }
  return image
}
