const { General } = require("../../utils/db");

async function get(req, res) {
  General.find().then((general) => {
    if (general.length > 0) {
      res.status(200).send(general);
    } else {
      res.status(404).send("data not found");
    }
  });
}

module.exports = { get };
