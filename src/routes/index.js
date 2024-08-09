const express = require("express");
const router = express.Router();
const authRouter = require("./auth");
const aboutController = require("../controllers/about.controller");
const generalController = require("../controllers/general.controller");
const partnerController = require("../controllers/partner.controller");
const productController = require("../controllers/product.controller");

router.get("/", (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      appName: "KDR /API",
      version: 0.1,
      message: "Welcome to our KDR Application Programming Interface",
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
});

// register user use authRouter
router.use("/user", authRouter);

router.get("/about", aboutController.get);

router.get("/general", generalController.get);

router.get("/partners", partnerController.get);

router.get("/products", productController.get);

module.exports = router;
