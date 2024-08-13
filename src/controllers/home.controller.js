const { About, General, Partner, Product, Characteristic } = require("../../utils/db");
const dotenv = require("dotenv");

async function get(req, res) {
  const appUrl = process.env.APP_URL;
  try {
    const about = await About.findOne({}, { _id: 0, __v: 0 }).then((about) => {
      about.image = appUrl + about.image;
      return about;
    });
    const characteristic = await Characteristic.find({}, { _id: 0, __v: 0 });
    const general = await General.findOne({}, { _id: 0, __v: 0 }).then((general) => {
      general.logoImage = appUrl + general.logoImage;
      general.heroImage = appUrl + general.heroImage;
      return general;
    });
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
        about: { ...about._doc, characteristic: mappingArr(characteristic) },
        general,
        partners: mappingArr(partners),
        products: mappingArr(products),
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
