const express = require('express')
const app = express()
require('./utils/db')
const Product = require('./model/products')
const Partner = require('./model/partners')
const General = require('./model/general')
const About = require('./model/about')
const { uploadHandler } = require("./utils/multer-config")
const fs = require('fs')
const port = 8080

// built in middleware
app.use(express.static('public'))
// application level middleware 
app.use((req, res, next) => {
  console.log('Time:', Date.now())
  next()
})


app.get('/', (req, res) => {
  res.status(200).json({
    message: "hello world !"
  });
})

app.get('/general', (req, res) => {
  General.find().then((general) => {
    res.status(200).json(general)
  })
})

app.get('/about', (req, res) => {
  About.find().then((about) => {
    res.status(200).json(about)
  })
})

app.get('/products', (req, res) => {
  Product.find().then((product) => {
    res.status(200).json(product)
  })
})

app.get('/partners', (req, res) => {
  Partner.find().then((partner) => {
    res.status(200).json(partner)
  })
})

app.post('/user', uploadHandler.single('image'), (req, res) => {
  console.log(req.file, req.body)
  res.status(200)
  res.send(req.body)
})

// response 404
app.use((req, res) => {
  res.status(404)
  res.send("404 not found")
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
