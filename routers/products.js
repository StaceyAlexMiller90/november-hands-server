const { Router } = require('express')
const Product = require('../models/').product
const ProductColor = require('../models/').productColor
const Color = require('../models/').color
const Image = require('../models/').image
const Discount = require('../models/').discount
const Collection = require('../models/').collection
const Category = require('../models/').category

const shapeProducts = require('../helpers/index').shapeProducts

const router = new Router()

// Get products
router.get('/', async (req, res, next) => {
  const limit = req.query.limit || 25
  const offset = req.query.offset || 0

  const products = await ProductColor.findAll({
    limit,
    offset,
    attributes: ['id', 'price', 'stockQuantity'],
    include: [
      {
        model: Product,
        include: [
          {
            model: Category,
            attributes: ['name']
          }
        ]
      },
      { model: Image, attributes: ['path'] },
      { model: Color, attributes: ['name'] },
      { model: Collection, attributes: ['name'] },
      { model: Discount, attributes: ['description', 'discountPercentage'] }
    ]
  })

  const formattedProducts = shapeProducts(products)
  res.send({ products: formattedProducts })
})

module.exports = router
