const express = require('express')
const router = express.Router()

// import all routes
const homeRouter = require('./home')
const styleRouter = require('./style')

const routeStack = [
  homeRouter, styleRouter
]

router.use(routeStack)

module.exports = router
