const express = require("express");
const { sendToMostafaKamar } = require("../controllers/Contact");

const contactRouter = express.Router();

contactRouter.route("/").post(sendToMostafaKamar);

module.exports = contactRouter;
