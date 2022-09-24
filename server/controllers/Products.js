const productModel = require("../models/Product");
const trueData = require("../furnitureData.json");
const jwt = require("jsonwebtoken");
const userModel = require("../models/User");

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
const addProduct = async (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  let s = jwt.verify(token, process.env.JWT_SECRET);

  const user = await userModel.findOne({ email: s.email });
  if (!user.isAdmin) {
    return res.status(403).json({ msg: "user isn't authenticated" });
  }
  const product = await productModel.create({ ...req.body });
  res.status(200).json({ success: "added product successfully", product });
};

const getProducts = async (req, res) => {
  const { type, name } = req.query;
  const products = await productModel.find({});

  let result = products;

  if (name) {
    result = products.filter((ele) => {
      if (ele.name.toLowerCase().includes(name.toLowerCase())) {
        return ele;
      }
    });
  }
  if (type) {
    result = result.filter((ele) => ele.type === type);
  }
  return res.status(200).json({ products: result, nbHits: result.length });
};

module.exports = { uploadAllProducts, addProduct, getProducts };
