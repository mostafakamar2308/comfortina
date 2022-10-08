const userModel = require("../models/User");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  let { username, password, name, email, isAdmin } = req.body;
  if (!isAdmin) {
    isAdmin = false;
  }
  //check duplicate usernames
  const isUserName = await userModel.find({ username });
  if (isUserName) {
    return res
      .status(400)
      .json({ status: 11000, msg: "Please user Another UserName" });
  }

  //check duplicate mails
  const isEmail = await userModel.find({ email });
  if (isEmail) {
    return res
      .status(400)
      .json({ status: 11000, msg: "Please user Another Email" });
  }
  const user = { username, password, name, email, isAdmin };

  await userModel.find({ username });
  const UserDB = await userModel.create({ ...user });

  const token = UserDB.createJWT();
  res.status(201).json({
    user: {
      username: UserDB.username,
      name: UserDB.name,
      isAdmin: UserDB.isAdmin,
    },
    token,
  });
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
      userName: user.username,
      isAdmin: user.isAdmin,
    },
    token,
  });
};

const updateUserRole = async (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  let s = jwt.verify(token, process.env.JWT_SECRET);
  const user = await userModel.findOne({ email: s.email });
  if (!user.isAdmin) {
    return res.status(403).json({ msg: "user isn't authenticated" });
  }
  const { email, isAdmin } = req.body;
  const changedUser = await userModel.findOneAndUpdate({ email }, { isAdmin });
  return res.status(200).json({ msg: "changed successfully" });
};

module.exports = { registerUser, login, updateUserRole };
