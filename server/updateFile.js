const data = require("./newFurniture.json");
const fs = require("fs");
const path = require("path");

Object.keys(data).forEach((ele) => {
  const trueData = data[ele].map((element) => {
    let price = element.price.split(" ")[1].split(",").join("");
    element.price = Number(price);
    return element;
  });
  console.log(trueData);

  fs.writeFileSync(
    path.join(__dirname, "trueData.json"),
    JSON.stringify(trueData),
    "utf8"
  );
});
