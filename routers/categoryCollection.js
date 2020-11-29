const { Router } = require('express')
const Collection = require('../models').collection
const Category = require('../models').category

const router = new Router()

router.get('/', async (req, res, next) => {
  const categories = await Category.findAll()
  const collections = await Collection.findAll()

  res.send({ categories, collections })
})

module.exports = router
