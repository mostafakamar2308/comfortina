import React from "react";
import Product from "./Product";

function CategoriesProduct({ products, categoryName }) {
  return (
    <div className="max-w-screen">
      <h3 className="categories-header w-full  box-border py-5 text-center bg-light-red text-2xl font-bold text-white">
        Best {categoryName}
      </h3>
      <div className="products flex flex-wrap w-full justify-center gap-2 py-2">
        {products.map((ele) => {
          return (
            <Product
              key={ele._id}
              productId={ele._id}
              productImg={ele.img}
              productName={ele.name}
              productPrice={ele.price}
              productSale={ele.onSale}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CategoriesProduct;
