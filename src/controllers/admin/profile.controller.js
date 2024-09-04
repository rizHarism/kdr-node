const User = require("../../../models/users");
const dotenv = require("dotenv");
dotenv.config();
const appUrl = process.env.APP_URL;
const multer = require("multer");

function get(req, res) {
  res.send(req.user);
}

async function update(req, res) {
  try {
    throw new Error("BROKEN");
  } catch (err) {
    console.log(err.message);
  }
}

module.exports = { get, update };
