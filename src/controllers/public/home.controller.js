const { General, Characteristic, Product, Partner } = require("../../../utils/db");
const dotenv = require("dotenv");
dotenv.config();

async function get(req, res) {
  const appUrl = process.env.APP_URL;
  try {
    const general = await General.findOne({}, { _id: 0, __v: 0 }).then((general) => {
      general.logoImage = appUrl + general.logoImage;
      general.heroImage = appUrl + general.heroImage;
      general.aboutImage = appUrl + general.aboutImage;
      return general;
    });
    const characteristic = await Characteristic.find({}, { _id: 0, __v: 0 });
    const partners = await Partner.find({}, { _id: 0, __v: 0 });
    const products = await Product.find({}, { _id: 0, __v: 0 });

    // change host of image method
    function mappingArr(val) {
      val.map((item) => {
        item.image = appUrl + item.image;
      });
      return val;
    }

    res.status(200).json({
      status: "success",
      code: 200,
      data: {
        general,
        characteristic: mappingArr(characteristic),
        products: mappingArr(products),
        partners: mappingArr(partners),
      },
      message: "Data successfully retrieved.",
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      code: 500,
      data: [],
      message: "Internal Server Error",
    });
  }
  res.end();
}

module.exports = { get };
