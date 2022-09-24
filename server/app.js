const express = require("express");
const connectDB = require("./DB/connect");
const authRouter = require("./routes/auth");
const productRoute = require("./routes/products");
const app = express();
require("dotenv").config();
require("express-async-errors");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, e-commerce");
});
app.use("/api/v1", authRouter);
<<<<<<< HEAD
app.use("/api/v1/products", productRoute);
=======
>>>>>>> parent of c2d38df (updated product prices that I scrapped previously from jumia and removed the  and made them as numbers)

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
