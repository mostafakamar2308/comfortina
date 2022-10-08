import React, { useContext, lazy, Suspense } from "react";
import { AppContext } from "./Home";
const CategoriesProduct = lazy(() => import("./CategoriesProduct"));

function HomeProducts() {
  const context = useContext(AppContext);
  const chairs = context.products.filter((ele) => ele.type === "chair");
  const shelves = context.products.filter((ele) => ele.type === "shelve");
  const tables = context.products.filter((ele) => ele.type === "table");
  const desks = context.products.filter((ele) => ele.type === "desk");
  return (
    <section className="">
      <Suspense fallback={<div>Loading ...</div>}>
        <CategoriesProduct
          products={chairs.slice(0, 4)}
          categoryName="Chairs"
        />
      </Suspense>
      <Suspense fallback={<div>Loading ...</div>}>
        <CategoriesProduct
          products={shelves.slice(0, 4)}
          categoryName="Shelves"
        />
      </Suspense>
      <Suspense fallback={<div>Loading ...</div>}>
        <CategoriesProduct
          products={tables.slice(0, 4)}
          categoryName="Tables"
        />
      </Suspense>
      <Suspense fallback={<div>Loading ...</div>}>
        <CategoriesProduct products={desks.slice(0, 4)} categoryName="Desks" />
      </Suspense>
    </section>
  );
}

export default HomeProducts;
