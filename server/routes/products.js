const express = require("express");
const { uploadAllProducts, addProduct } = require("../controllers/Products");
const productRoute = express.Router();

productRoute.route("/").post(addProduct);

module.exports = productRoute;
