const productModel = require("../models/Product");
const trueData = require("../trueData.json");

const uploadAllProducts = async (req, res) => {
  const products = await productModel.create(trueData);
  res.status(200).json({ success: "created Successfully", data: products });
};

module.exports = { uploadAllProducts };
