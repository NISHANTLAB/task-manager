const { body } = require("express-validator");

exports.validateRegister = [
  body("username").notEmpty().withMessage("Username is required"),
  body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters"),
];

exports.validateLogin = [
  body("username").notEmpty().withMessage("Username is required"),
  body("password").notEmpty().withMessage("Password is required"),
];

