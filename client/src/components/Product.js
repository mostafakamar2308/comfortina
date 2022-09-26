import React from "react";

function Product({ productName, productPrice, productImg, productSale }) {
  return (
    <div className="flex flex-col items-center  w-96">
      <img src={productImg} alt={productName} />
      <h4 className="text-md clamp"> {productName}</h4>
      <h4 className="font-bold">{productPrice} EGP</h4>
      {productSale > 0 && <div> {productSale}</div>}
    </div>
  );
}

export default Product;
