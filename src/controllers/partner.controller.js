const Partner = require("../../models/partners");
const dotenv = require("dotenv");
dotenv.config();
const appUrl = process.env.APP_URL;

async function get(req, res) {
  await Partner.find().then((partner) => {
    if (partner.length > 0) {
      partner.map((val) => {
        val.image = appUrl + val.image;
      });
      res.status(200).json({
        status: "success",
        code: 200,
        path: "/partners",
        data: partner,
        message: "Data about successfully retrieved",
      });
    } else {
      res.status(404).send("data not found");
    }
  });
}

module.exports = { get };
