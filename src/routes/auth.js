const express = require("express");
const { Register } = require("../controllers/auth.controller");
const Validate = require("../../middleware/validate.js");
const { check } = require("express-validator");

const authRouter = express.Router();

// Register route -- POST request
authRouter.post(
  "/register",
  check("username").not().isEmpty().withMessage("You first name is required").trim().escape(),
  check("name").not().isEmpty().withMessage("You first name is required").trim().escape(),
  check("password").notEmpty().isLength({ min: 8 }).withMessage("Must be at least 8 chars long"),
  Validate,
  Register
);

module.exports = authRouter;
