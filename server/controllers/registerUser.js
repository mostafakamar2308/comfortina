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

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json("Please enter a valid email or password");
  }
  const user = await userModel.findOne({ email });
  if (!user) {
    return res.status(404).json("The email you've entered isn't registered");
  }
  const correctPassword = await user.comparePassword(password);
  if (!correctPassword) {
    return res.status(404).json("Wrong Password");
  }
  const token = user.createJWT();
  res.json({
    user: {
      name: user.name,
      email: user.email,
      userName: user.username,
      isAdmin: user.isAdmin,
    },
    token,
  });
};

module.exports = { registerUser, login };
