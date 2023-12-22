import React from "react";
import Product from "./Product";

function CategoriesProduct({ products, categoryName }) {
  return (
    <div className="max-w-screen">
      <h3 className="box-border w-full py-5 text-2xl font-bold text-center text-white categories-header bg-chair">
        Best {categoryName}
      </h3>
      <div className="flex flex-wrap justify-center w-full gap-2 py-2 products">
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
