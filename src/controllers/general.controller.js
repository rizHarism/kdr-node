const General = require("../../models/general");
const dotenv = require("dotenv");
dotenv.config();
const appUrl = process.env.APP_URL;
async function get(req, res) {
  await General.findOne().then((general) => {
    if (general) {
      general.logoImage = appUrl + general.logoImage;
      general.heroImage = appUrl + general.heroImage;
      general.aboutImage = appUrl + general.aboutImage;
      res.status(200).json({
        status: "success",
        code: 200,
        path: "/general",
        data: general,
        message: "Data about successfully retrieved",
      });
    } else {
      res.status(404).send("data not found");
    }
  });
}

module.exports = { get };
