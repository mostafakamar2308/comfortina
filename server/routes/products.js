const express = require("express");
const {
  addProduct,
  getProducts,
  updateSale,
  deleteProduct,
  getOneProduct,
} = require("../controllers/Products");
const {
  favoriteManagment,
  getFavorites,
  cartManagment,
  getCart,
} = require("../controllers/userActions");
const productRoute = express.Router();

productRoute.route("/").post(addProduct).get(getProducts);
productRoute.route("/favorite").post(favoriteManagment);
productRoute.route("/getFavorites").post(getFavorites);

productRoute.route("/cart").post(cartManagment);
productRoute.route("/getCart").post(getCart);
productRoute
  .route("/:id")
  .get(getOneProduct)
  .patch(updateSale)
  .delete(deleteProduct);

module.exports = productRoute;
