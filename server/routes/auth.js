const express = require("express");
const { registerUser, login } = require("../controllers/registerUser");
const authRouter = express.Router();

authRouter.route("/register").post(registerUser);
authRouter.route("/login").post(login);

module.exports = authRouter;
