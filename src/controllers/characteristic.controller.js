const { Characteristic } = require("../../utils/db");

async function get(req, res) {
  Characteristic.find().then((character) => {
    if (character.length > 0) {
      res.status(200).send(character);
    } else {
      res.status(404).send("data not found");
    }
  });
}

module.exports = { get };
