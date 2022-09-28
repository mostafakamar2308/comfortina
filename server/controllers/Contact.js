const userModel = require("../models/User");

const sendToMostafaKamar = async (req, res) => {
  const { msg, email, name } = req.body;
  const admin = await userModel.findOneAndUpdate(
    { email: "mostafasama771@gmail.com" },
    { $push: { messages: { msg, email, name } } },
    { new: true }
  );
  res.status(200).json({ msg: admin });
};

module.exports = { sendToMostafaKamar };
