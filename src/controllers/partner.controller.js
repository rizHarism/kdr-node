const Partner = require("../../models/partners");

async function get(req, res) {
  Partner.find().then((partner) => {
    if (partner.length > 0) {
      res.status(200).send(partner);
    } else {
      res.status(404).send("data not found");
    }
  });
}

module.exports = { get };
