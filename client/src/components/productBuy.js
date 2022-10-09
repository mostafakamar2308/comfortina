import React from "react";
import close from "../assets/close.png";

function ProductBuy({
  productName,
  productImg,
  productPrice,
  productId,
  removeItem,
}) {
  return (
    <div className="md:grid md:grid-cols-cart border shadow-md w-11/12">
      <div>
        <img className="h-full" src={productImg} alt={productName} />
      </div>
      <div className="flex flex-col justify-between py-5 px-2">
        <div>
          <h2 className="text-2xl md:w-2/3">{productName}</h2>
          <p className="text-xl">{productPrice} EGP</p>
        </div>
        <div className="flex justify-center mt-3">
          <button
            onClick={() => removeItem(productId)}
            className="bg-light-red border flex justify-center gap-x-2 items-center border-white rounded py-1 px-2 text-white"
          >
            <img src={close} className="h-4" alt="remove element"></img>
            Remove From Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductBuy;
