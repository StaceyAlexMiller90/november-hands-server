const { Router } = require('express')
const Product = require('../models/').product
const ProductColor = require('../models/').productColor
const Color = require('../models/').color
const Image = require('../models/').image
const Discount = require('../models/').discount
const Collection = require('../models/').collection
const Category = require('../models/').category

const router = new Router()

// See all products
router.get('/', async (req, res, next) => {
  const products = await Product.findAll({
    include: [{ model: ProductColor, include: [Color, Image, Collection, Category, Discount] }]
  })
  res.send({ products: products })
})

//See products by Category
router.get('/category')

//See products by Collection
router.get('/collection')

module.exports = router
