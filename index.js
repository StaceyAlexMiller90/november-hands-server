const express = require('express')
const loggerMiddleWare = require('morgan')
const { PORT } = require('./config/constants')
const corsMiddleWare = require('cors')
const authRouter = require('./routers/auth')
const productRouter = require('./routers/products')
const categoryCollectionRouter = require('./routers/categoryCollection')

const app = express()
app.use(corsMiddleWare())
app.use(loggerMiddleWare('dev'))

const bodyParserMiddleWare = express.json()
app.use(bodyParserMiddleWare)

app.use('/', authRouter)
app.use('/products', productRouter)
app.use('/categories/collections', categoryCollectionRouter)

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})
