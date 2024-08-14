const About = require("../../models/about");
const Characteristic = require("../../models/characteristic");
const dotenv = require("dotenv");
dotenv.config();
const appUrl = process.env.APP_URL;
async function get(req, res) {
  await About.findOne().then(async (about) => {
    if (about) {
      about.image = appUrl + about.image;

      // memanggil document characteristik
      const childAbout = Characteristic.find().then((character) => {
        if (character.length > 0) {
          character.map((val) => {
            val.image = appUrl + val.image;
          });
          return character;
        }
      });

      res.status(200).json({
        status: "success",
        code: 200,
        path: "/about",
        data: { ...about._doc, characteristic: await childAbout },
        message: "Data about successfully retrieved",
      });
    } else {
      res.status(404).send("data not found");
    }
  });
}

module.exports = { get };
