const User = require("../models/users");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

async function Verify(req, res, next) {
  try {
    const authHeader = req.headers["cookie"]; // get the session cookie from request header
    console.log(authHeader);
    if (!authHeader) {
      return res.status(401).json({
        status: "unauthorized",
        code: 401,
        message: "User not authorized",
      }); // if there is no cookie from request header, send an unauthorized response.
    }
    const cookie = authHeader.split("=")[1]; // If there is, split the cookie string to get the actual jwt

    // Verify using jwt to see if token has been tampered with or if it has expired.
    // that's like checking the integrity of the cookie
    jwt.verify(
      cookie,
      process.env.SECRET_ACCESS_TOKEN,
      async (err, decoded) => {
        if (err) {
          // if token has been altered or has expired, return an unauthorized error
          return res
            .status(401)
            .json({ message: "This session has expired. Please login" });
        }

        const { id } = decoded; // get user id from the decoded token
        const user = await User.findById(id); // find user by that `id`
        const { password, ...data } = user._doc; // return user object without the password
        req.user = data; // put the data object into req.user
        next();
      }
    );
  } catch (err) {
    res.status(500).json({
      status: "error",
      code: 500,
      data: [],
      message: "Internal Server Error",
    });
  }
}

module.exports = { Verify };
