const express = require("express");
const router = express.Router();
const authRouter = require("./auth");
const homeController = require("../controllers/public/home.controller");
const articlesController = require("../controllers/public/article.controller");
const profileController = require("../controllers/admin/profile.controller");
const characteristicController = require("../controllers/admin/characteristic.controller");
const generalController = require("../controllers/admin/general.controller");
const partnerController = require("../controllers/admin/partner.controller");
const productController = require("../controllers/admin/product.controller");
const { Verify } = require("../../middleware/verify");
const { UploadHandlerUserImage } = require("../../utils/multer-config");

router.get("/", homeController.get);
// public route for articles
router.get("/articles", articlesController.get);
router.get("/articles/:slug", articlesController.detailArticle);

// authRouter for register, login and logout user
router.use("/user", authRouter);

// ------------------ admin router ---------------------------- //
// admin panel - profile page
router.get("/admin/profile", Verify, profileController.get);
router.put("/admin/profile", Verify, UploadHandlerUserImage.single("image"), profileController.update);

// admin panel - general page
router.get("/admin/general", Verify, generalController.get);

// admin panel - partners page
router.get("/admin/partners", Verify, partnerController.get);

// admin panel - products page
router.get("/admin/products", Verify, productController.get);

router.get("/admin/characteristic", Verify, characteristicController.get);

module.exports = router;
