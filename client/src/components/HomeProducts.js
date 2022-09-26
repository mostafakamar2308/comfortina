import React, { useContext } from "react";
import { AppContext } from "../App";
import CategoriesProduct from "./CategoriesProduct";

function HomeProducts() {
  const context = useContext(AppContext);
  const chairs = context.products.filter((ele) => ele.type === "chair");
  const shelves = context.products.filter((ele) => ele.type === "shelve");
  const tables = context.products.filter((ele) => ele.type === "table");
  const desks = context.products.filter((ele) => ele.type === "desk");
  console.log(context);
  return (
    <section>
      <CategoriesProduct products={chairs.slice(0, 4)} categoryName="Chairs" />
      <CategoriesProduct
        products={shelves.slice(0, 4)}
        categoryName="Shelves"
      />
      <CategoriesProduct products={tables.slice(0, 4)} categoryName="Tables" />
      <CategoriesProduct products={desks.slice(0, 4)} categoryName="Desks" />
    </section>
  );
}

export default HomeProducts;
