const express = require('express')
const router = express.Router()

// import services for style
const { index, buildStyle } = require('../services/build-style')

router.get('/style', index)
router.post('/style', buildStyle)

module.exports = router
