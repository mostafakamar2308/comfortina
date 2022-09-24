const express = require("express");
const { uploadAllProducts } = require("../controllers/Products");
const productRoute = express.Router();

productRoute.route("/").post(uploadAllProducts);

module.exports = productRoute;
