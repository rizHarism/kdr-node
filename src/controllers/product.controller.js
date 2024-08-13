const Product = require("../../models/products");

async function get(req, res) {
  Product.find().then((product) => {
    if (product.length > 0) {
      res.status(200).send(product);
    } else {
      res.status(404).send("data not found");
    }
  });
}

module.exports = { get };
