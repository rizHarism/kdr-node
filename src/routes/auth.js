const express = require("express");
const { Register, Login, Logout } = require("../controllers/auth/auth.controller.js");
const Validate = require("../../middleware/validate.js");
const { Verify } = require("../../middleware/verify");
const { check } = require("express-validator");

const authRouter = express.Router();

// Register route -- POST request
authRouter.post(
  "/register",
  Verify,
  check("username").not().isEmpty().withMessage("Username is required").trim().escape(),
  check("name").not().isEmpty().withMessage("Your name is required").trim().escape(),
  check("password").notEmpty().isLength({ min: 8 }).withMessage("Must be at least 8 chars long"),
  Validate,
  Register
);

authRouter.post("/login", check("username").not().isEmpty().withMessage("Enter a valid Username").trim().escape(), check("password").not().isEmpty(), Validate, Login);

authRouter.get("/logout", Logout);

module.exports = authRouter;
