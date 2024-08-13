const About = require("../../models/about");
async function get(req, res) {
  About.find().then((about) => {
    if (about.length > 0) {
      res.status(200).send(about);
    } else {
      res.status(404).send("data not found");
    }
  });
}

module.exports = { get };
