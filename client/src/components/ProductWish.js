import React from "react";

function ProductWish({ productName, productImg, productPrice, productId }) {
  return (
    <div className="md:grid md:grid-cols-favorites border shadow-md md:w-11/12 w-10/12">
      <div>
        <img className="md:h-full w-full" src={productImg} alt={productName} />
      </div>
      <div className="flex flex-col justify-start py-5 px-2">
        <h2 className="text-2xl w-2/3">{productName}</h2>
        <p className="text-xl">{productPrice} EGP</p>
      </div>
    </div>
  );
}

export default ProductWish;
