const data = require("./newFurniture.json");

const fs = require("fs");

let newData = {};
Object.keys(data).forEach((ele) => {
  newData[ele] = data[ele].map((element) => {
    element.price = Number(element.price.split(" ")[1].split(",").join(""));
    return element;
  });
});

console.log(newData);

fs.writeFileSync("./furnitureData.json", JSON.stringify(newData), "utf8");
