const { Router } = require('express')
const Product = require('../models').product
const ProductColor = require('../models').productColor
const Color = require('../models').color
const Image = require('../models').image
const Discount = require('../models').discount
const Collection = require('../models').collection
const Category = require('../models').category

const router = new Router()

router.get('/', async (req, res, next) => {
  const categories = await Category.findAll()
  const collections = await Collection.findAll()

  res.send({ categories, collections })
})

module.exports = router
