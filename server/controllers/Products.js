const productModel = require("../models/Product");
const trueData = require("../furnitureData.json");

const uploadAllProducts = async (req, res) => {
  Object.keys(trueData).forEach((ele) => {
    trueData[ele].map(async (product) => {
      console.log(product);
      const productData = await productModel.create({
        ...product,
        name: product.title,
        type: ele.slice(0, -1),
      });
    });
  });
  res.status(200).json({ success: "created Successfully" });
};

module.exports = { uploadAllProducts };
