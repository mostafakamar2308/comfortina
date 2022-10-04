import React from "react";

function ProductBuy({ productName, productImg, productPrice, productId }) {
  return (
    <div>
      <div>
        <img className="h-full" src={productImg} alt={productName} />
      </div>
      <div className="flex flex-col justify-start py-5">
        <h2 className="text-2xl w-2/3">{productName}</h2>
        <p className="text-xl">{productPrice} EGP</p>
      </div>
    </div>
  );
}

export default ProductBuy;
