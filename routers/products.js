const { Router } = require('express')
const Product = require('../models/').product

const router = new Router()

// See all products
router.get('/')

//See products by Category
router.get('/category')

//See products by Collection
router.get('/collection')

module.exports = router
