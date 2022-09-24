const userModel = require("../models/User");

const registerUser = async (req, res) => {
  let { username, password, name, email, isAdmin } = req.body;
  if (!isAdmin) {
    isAdmin = false;
  }
  const user = { username, password, name, email, isAdmin };
  const UserDB = await userModel.create({ ...user });
  const token = UserDB.createJWT();
  res
    .status(201)
    .json({ user: { username: UserDB.username, name: UserDB.name }, token });
};

const login = (req, res) => {
  res.json({ msg: "User Logged In" });
};

module.exports = { registerUser, login };
