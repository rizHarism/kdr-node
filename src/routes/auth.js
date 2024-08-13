const express = require("express");
const { Register, Login } = require("../controllers/auth.controller");
const Validate = require("../../middleware/validate.js");
const { check } = require("express-validator");

const authRouter = express.Router();

// Register route -- POST request
authRouter.post(
  "/register",
  check("username").not().isEmpty().withMessage("Username is required").trim().escape(),
  check("name").not().isEmpty().withMessage("Your name is required").trim().escape(),
  check("password").notEmpty().isLength({ min: 8 }).withMessage("Must be at least 8 chars long"),
  Validate,
  Register
);

authRouter.post("/login", check("username").not().isEmpty().withMessage("Enter a valid Username").trim().escape(), check("password").not().isEmpty(), Validate, Login);

module.exports = authRouter;
