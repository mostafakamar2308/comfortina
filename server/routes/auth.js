const express = require("express");
const loginFromToken = require("../controllers/loginFromToken");
const {
  registerUser,
  login,
  updateUserRole,
} = require("../controllers/registerUser");
const authRouter = express.Router();

authRouter.route("/register").post(registerUser);
authRouter.route("/login").post(login);
authRouter.route("/token").post(loginFromToken);
authRouter.route("/changeUserRoles").post(updateUserRole);

module.exports = authRouter;
