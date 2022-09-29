import React, { useState } from "react";
import unloved from "../assets/unlovedheart.png";
import loved from "../assets/lovedheart.png";

function Product({
  productName,
  productPrice,
  productImg,
  productSale,
  productId,
}) {
  const [lovedBtn, setLovedBtn] = useState(false);

  const handleFavorite = () => {
    setLovedBtn((prev) => !prev);
  };
  return (
    <div
      className="flex flex-col items-center  w-96 relative group"
      dataId={productId}
    >
      <button
        onClick={handleFavorite}
        className="absolute hidden opacity-0 transition-all duration-300 right-2 top-2 group-hover:block group-hover:opacity-100 "
      >
        <img src={!lovedBtn ? unloved : loved} alt="unloved" className="h-5" />
      </button>
      <img src={productImg} alt={productName} />
      <h4 className="text-md clamp"> {productName}</h4>
      <h4 className="font-bold">{productPrice} EGP</h4>
      {productSale > 0 && <div> {productSale}</div>}
    </div>
  );
}

export default Product;
