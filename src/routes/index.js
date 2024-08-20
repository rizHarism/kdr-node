const express = require("express");
const router = express.Router();
const authRouter = require("./auth");
const homeController = require("../controllers/home.controller");
const articlesController = require("../controllers/article.controller");
const aboutController = require("../controllers/about.controller");
const characteristicController = require("../controllers/characteristic.controller");
const generalController = require("../controllers/general.controller");
const partnerController = require("../controllers/partner.controller");
const productController = require("../controllers/product.controller");
const { Verify } = require("../../middleware/verify");

// router.get("/", (req, res) => {
//   try {
//     res.status(200).json({
//       status: "success",
//       appName: "KDR /API",
//       version: 0.1,
//       message: "Welcome to our KDR Application Programming Interface",
//     });
//   } catch (err) {
//     res.status(500).json({
//       status: "error",
//       message: "Internal Server Error",
//     });
//   }
// });

// register user use authRouter
router.use("/user", authRouter);

router.get("/", homeController.get);

router.get("/articles", articlesController.getArticles);
router.get("/articles/:slug", articlesController.detailArticle);

router.get("/about", Verify, aboutController.get);

router.get("/general", Verify, generalController.get);

router.get("/partners", Verify, partnerController.get);

router.get("/products", Verify, productController.get);

router.get("/characteristic", Verify, characteristicController.get);

module.exports = router;
