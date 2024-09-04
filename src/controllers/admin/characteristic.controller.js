const { Characteristic } = require("../../../utils/db");
const dotenv = require("dotenv");
dotenv.config();
const appUrl = process.env.APP_URL;

async function get(req, res) {
  await Characteristic.find().then((character) => {
    if (character.length > 0) {
      character.map((val) => {
        val.image = appUrl + val.image;
        return val;
      });
      res.status(200).json({
        status: "success",
        code: 200,
        path: "/characteristic",
        data: character,
        message: "Data about successfully retrieved",
      });
    } else {
      res.status(404).send("data not found");
    }
  });
}

module.exports = { get };
