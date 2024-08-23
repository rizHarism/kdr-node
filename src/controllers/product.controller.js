const Product = require("../../models/products");
const dotenv = require("dotenv");
dotenv.config();
const appUrl = process.env.APP_URL;

async function get(req, res) {
  await Product.find().then((product) => {
    if (product.length > 0) {
      product.map((val) => {
        val.image = appUrl + val.image;
        return val;
      });
      res.status(200).json({
        status: "success",
        code: 200,
        path: "/products",
        data: product,
        message: "Data about successfully retrieved",
      });
    } else {
      res.status(404).send("data not found");
    }
  });
}

module.exports = { get };
