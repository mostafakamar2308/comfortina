const express = require("express");
const {
  uploadAllProducts,
  addProduct,
  getProducts,
} = require("../controllers/Products");
const productRoute = express.Router();

productRoute.route("/").post(addProduct).get(getProducts);

module.exports = productRoute;
