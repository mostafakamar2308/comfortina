const express = require("express");
const connectDB = require("./DB/connect");
const authRouter = require("./routes/auth");
const app = express();
require("dotenv").config();
require("express-async-errors");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, e-commerce");
});
app.use("/api/v1", authRouter);


const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log("App has started");
    });
  } catch (e) {
    console.log(e);
  }
};

start();
