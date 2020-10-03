const shapeProducts = (products) => {
  const formattedProducts = products.flatMap((product) => {
    return product.productColors.map((col) => {
      return {
        productColorId: col.id,
        productName: product.name,
        category: product.category.name,
        collection: col.collection.name,
        color: col.color.name,
        discount: col.discount,
        images: col.images.map((image) => image.path),
        price: col.price,
        stockQty: col.stockQuantity
      }
    })
  })
  return formattedProducts
}

module.exports = {
  shapeProducts
}
