// Date.prototype.addDays = function (days) {
//   var date = new Date(this.valueOf());
//   date.setDate(date.getDate() + days);
//   return date;
// };

const jwt = require("jsonwebtoken");

const loginFromToken = (req, res) => {
  const { token } = req.body;
  if (!token) {
    return res.status(403).json({ status: 403, msg: "pls Enter a token" });
  }
  const isLoggedIn = token && jwt.verify(token, process.env.JWT_SECRET);
  let nowDate = Date.now();
  if (nowDate > isLoggedIn.exp * 1000) {
    return res.status(403).json({ status: 403, msg: "pls Login Again" });
  }
  return res.status(201).json({ ...isLoggedIn, nowDate });
};

module.exports = loginFromToken;
