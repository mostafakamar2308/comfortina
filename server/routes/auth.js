const express = require("express");
const {
  registerUser,
  login,
  updateUserRole,
} = require("../controllers/registerUser");
const authRouter = express.Router();

authRouter.route("/register").post(registerUser);
authRouter.route("/login").post(login);
authRouter.route("/changeUserRoles").post(updateUserRole);

module.exports = authRouter;
