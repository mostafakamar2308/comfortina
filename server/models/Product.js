const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["chairs", "desks", "trashCans", "storages", "tables", "shelves"],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  onSale: {
    type: Number,
    default: 0,
  },
  img: {
    type: String,
    required: true,
  },
});

const productModel = mongoose.model("Product", productSchema);

module.exports = productModel;
