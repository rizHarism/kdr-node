const User = require("../../../models/users");
const dotenv = require("dotenv");
dotenv.config();
const appUrl = process.env.APP_URL;
const multer = require("multer");

function get(req, res) {
  res.send(req.user);
}

async function update(req, res) {
  const { _id, avatar } = req.user;
  console.log(req.user);
  if (req.file) {
    const dataUpdate = {
      username: req.body.username,
      name: req.body.name,
      avatar: "img/users/" + req.file.filename,
    };
    await User.findOneAndUpdate({ _id: _id }, dataUpdate);
  } else {
    const dataUpdate = {
      username: req.body.username,
      name: req.body.name,
    };
    await User.findOneAndUpdate({ _id: _id }, dataUpdate);
  }

  const updatedUser = await User.findOne({ _id: _id }, { _id: 0, role: 0, __v: 0 }).then((user) => {
    user.avatar = appUrl + user.avatar;
    return user;
  });

  res.status(200).json({
    status: "success",
    code: 200,
    data: updatedUser,
    message: "Profile has been updated",
  });
}

module.exports = { get, update };
