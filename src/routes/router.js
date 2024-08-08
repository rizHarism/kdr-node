const express = require("express");
const router = express.Router();
const aboutController = require("../controllers/about.controller");
const generalController = require("../controllers/general.controller");
const partnerController = require("../controllers/partner.controller");
const productController = require("../controllers/product.controller");

router.get("/about", aboutController.get);

router.get("/general", generalController.get);

router.get("/partners", partnerController.get);

router.get("/products", productController.get);

module.exports = router;
