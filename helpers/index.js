const applyDiscount = (price, discountPercentage) => {
  const discountAmount = (price / 100) * discountPercentage
  return price - discountAmount
}

const shapeProducts = (products) => {
  console.log(products)
  const formattedProducts = products.map((prod) => {
    const { id, collection, color, images, discount, stockQuantity, price, product } = prod

    return {
      productColorId: id,
      productName: product.name,
      category: product.category.name,
      collection: collection.name,
      color: color.name,
      price: price,
      discount: discount && discount.description,
      discountedPrice: discount && applyDiscount(price, discount.discountPercentage),
      stockQty: stockQuantity,
      images: images.map((image) => image.path)
    }
  })
  return formattedProducts
}

module.exports = {
  shapeProducts
}
