const express = require('express')
const router = express.Router()

router.get('/', function(req, res) {
  res.json({
    message: 'This is home'
  })
})
router.post('/', function(req, res) {
  res.json({
    message: 'Posted something!'
  })
})

module.exports = router
