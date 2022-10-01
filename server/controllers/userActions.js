const userModel = require("../models/User");
const jwt = require("jsonwebtoken");

const favoriteManagment = async (req, res) => {
  const { productID, token } = req.body;
  const isLoggedIn = token && jwt.verify(token, process.env.JWT_SECRET);
  const userBeforeUpdate = await userModel.find({
    username: isLoggedIn.username,
  });
  const currentFavs = userBeforeUpdate[0].favorites.filter(
    (ele) => ele === productID
  );
  if (currentFavs.length == 0) {
    const user = await userModel.findOneAndUpdate(
      { username: isLoggedIn.username },
      { $push: { favorites: productID } }
    );
    return res.status(200).json({ msg: "element Added Successfully" });
  } else if (currentFavs.length > 0) {
    const user = await userModel.findOneAndUpdate(
      { username: isLoggedIn.username },
      { $pull: { favorites: productID } }
    );
    return res.status(200).json({ msg: "element removed successfully" });
  }
  return res.status(200).json({ msg: "product already there" });
};

const getFavorites = async (req, res) => {
  const { token } = req.body;
  const isLoggedIn = jwt.verify(token, process.env.JWT_SECRET);
  const userBeforeUpdate = await userModel.find({
    username: isLoggedIn.username,
  });
  const favorites = userBeforeUpdate[0].favorites.filter(Boolean);
  res.status(200).json({ favorites });
};

const cartManagment = (req, res) => {
  res.send("managment of cart");
};

module.exports = { favoriteManagment, getFavorites };
