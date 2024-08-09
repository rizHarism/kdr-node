const User = require("../../models/users");

/**
 * @route POST v1/auth/register
 * @desc Register a user
 * @access admin
 */

async function Register(req, res) {
  // get required variables from request body
  // using es6 object destructing
  const { username, name, password } = req.body;
  try {
    // create an instance of a user
    const newUser = new User({
      username,
      name,
      password,
    });
    // Check if user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser)
      return res.status(400).json({
        status: "failed",
        data: [],
        message: "It seems you already have an account, please log in instead.",
      });
    const savedUser = await newUser.save(); // save new user into the database
    const { role, ...user_data } = savedUser._doc;
    res.status(200).json({
      status: "success",
      data: [user_data],
      message: "Account has been successfully created.",
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      code: 500,
      data: [],
      message: "Internal Server Error",
      message2: err,
    });
  }
  res.end();
}

module.exports = { Register };
