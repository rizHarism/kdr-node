const User = require("../../../models/users");
const Blacklist = require("../../../models/blacklistToken");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
dotenv.config();
const appUrl = process.env.APP_URL;

/**
 * @route POST /auth/
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

async function Login(req, res) {
  // Get variables for the login process
  const { username } = req.body;
  try {
    // Check if user exists
    const user = await User.findOne({ username })
      .select("+password")
      .then((user) => {
        user.avatar = appUrl + user.avatar;
        return user;
      });
    if (!user)
      return res.status(401).json({
        status: "failed",
        data: [],
        message: "Invalid username or password. Please try again with the correct credentials.",
      });
    // if user exists
    // validate password
    const isPasswordValid = await bcrypt.compare(`${req.body.password}`, user.password);
    // if not valid, return unathorized response

    if (!isPasswordValid)
      return res.status(401).json({
        status: "failed",
        data: [],
        message: "Invalid email or password. Please try again with the correct credentials.",
      });

    let options = {
      maxAge: 24 * 60 * 60 * 1000, // would expire in 20minutes
      httpOnly: true, // The cookie is only accessible by the web server
      secure: true,
      sameSite: "None",
    };
    const token = user.generateAccessJWT(); // generate session token for user
    res.cookie("SessionID", token, options); // set the token to response header, so that the client sends it back on each subsequent request

    // return user info except password
    const { _id, __v, password, ...user_data } = user._doc;

    res.status(200).json({
      status: "success",
      data: user_data,
      message: "You have successfully logged in.",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "error",
      code: 500,
      data: [],
      message: "Internal Server Error",
    });
  }
  res.end();
}

async function Logout(req, res) {
  try {
    const cookieSession = req.cookies.SessionID; // get the session cookie from request header
    console.log(cookieSession);
    if (!cookieSession) return res.sendStatus(204); // No content
    const checkIfBlacklisted = await Blacklist.findOne({ token: cookieSession }); // Check if that token is blacklisted
    // if true, send a no content response.
    console.log(checkIfBlacklisted);
    if (checkIfBlacklisted) return res.sendStatus(204);
    // otherwise blacklist token
    const newBlacklist = new Blacklist({
      token: cookieSession,
    });
    await newBlacklist.save();
    // Also clear request cookie on client
    // res.setHeader("Clear-Site-Data", "cookies");
    res.clearCookie("SessionID");
    res.status(200).json({ message: "You are logged out!" });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
  res.end();
}

module.exports = { Register, Login, Logout };
