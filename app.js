const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const { Product, Partner, General, About } = require("./utils/db");
// const Product = require("./model/products");
// const Partner = require("./model/partners");
// const General = require("./model/general");
// const About = require("./model/about");
const { uploadHandler } = require("./utils/multer-config");
const fs = require("fs");
port = process.env.PORT;

// built in middleware
app.use(express.static("public"));
// application level middleware
app.use((req, res, next) => {
  console.log("Time:", Date.now());
  next();
});

app.get("/", (req, res) => {
  res.status(200).json({
    message: "hello world !",
  });
});

app.get("/general", (req, res) => {
  General.find().then((general) => {
    if (general.length > 0) {
      res.status(200).json(general);
    } else {
      res.status(404).send("data not found");
    }
  });
});

app.get("/about", (req, res) => {
  About.find().then((about) => {
    if (about.length > 0) {
      res.status(200).json(about);
    } else {
      res.status(404).send("data not found");
    }
  });
});

app.get("/products", (req, res) => {
  Product.find().then((product) => {
    if (product.length > 0) {
      res.status(200).json(product);
    } else {
      res.status(404).send("data not found");
    }
  });
});

app.get("/partners", (req, res) => {
  Partner.find().then((partner) => {
    if (partner.length > 0) {
      res.status(200).json(partner);
    } else {
      res.status(404).send("data not found");
    }
  });
});

app.post("/user", uploadHandler.single("image"), (req, res) => {
  console.log(req.file, req.body);
  res.status(200);
  res.send(req.body);
});

// response 404
app.use((req, res) => {
  res.status(404);
  res.send("404 not found");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
