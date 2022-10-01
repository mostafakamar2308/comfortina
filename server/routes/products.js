const express = require("express");
const {
  addProduct,
  getProducts,
  updateSale,
  deleteProduct,
  getOneProduct,
} = require("../controllers/Products");
const favoriteManagment = require("../controllers/userActions");
const productRoute = express.Router();

productRoute.route("/").post(addProduct).get(getProducts);
productRoute.route("/favorite").post(favoriteManagment);
productRoute
  .route("/:id")
  .get(getOneProduct)
  .patch(updateSale)
  .delete(deleteProduct);

module.exports = productRoute;
