const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = 4001

// routes
const apiRouter = require('./routes')
app.use(bodyParser.json())
app.use(cors())

// app.use(express.json())
app.use('/style-dict-api/v1', apiRouter)

app.listen(port, function() {
  console.log('API running!')
})
