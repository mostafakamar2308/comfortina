import React, { useContext, useEffect, useState } from "react";
import unloved from "../assets/unlovedheart.png";
import loved from "../assets/lovedheart.png";
import axios from "axios";
import { UserContext } from "../App";

function Product({
  productName,
  productPrice,
  productImg,
  productSale,
  productId,
}) {
  const [lovedBtn, setLovedBtn] = useState(false);
  const user = useContext(UserContext);
  useEffect(() => {
    const loved = user.favoriteList.filter((ele) => ele === productId);
    loved.length > 0 ? setLovedBtn(true) : setLovedBtn(false);
  }, []);

  const handleFavorite = (e) => {
    const productID = e.target.getAttribute("dataid");
    console.log(productID);
    if (window.localStorage.getItem("userToken")) {
      const token = window.localStorage.getItem("userToken");
      axios
        .post("http://localhost:5000/api/v1/products/favorite", {
          token,
          productID,
        })
        .then((res) => {
          const loved = user.favoriteList.filter((ele) => ele === productId);
          console.log(loved);
          if (loved.length > 0) {
            user.setFavoriteList((prev) => {
              return prev.filter((ele) => ele !== productId);
            });
          } else {
            user.setFavoriteList((prev) => [...prev, productId]);
          }
          setLovedBtn((prev) => !prev);
        });
    }
  };
  return (
    <div
      className="flex flex-col items-center  w-96 relative group text-black"
      dataid={productId}
    >
      <button
        onClick={handleFavorite}
        dataid={productId}
        className="absolute hidden opacity-0 transition-all duration-300 right-2 top-2 group-hover:block group-hover:opacity-100 "
      >
        <img
          dataid={productId}
          src={!lovedBtn ? unloved : loved}
          alt="unloved"
          className="h-5"
        />
      </button>
      <img src={productImg} alt={productName} />
      <h4 className="text-md clamp"> {productName}</h4>
      <h4 className="font-bold">{productPrice} EGP</h4>
      {productSale > 0 && <div> {productSale}</div>}
    </div>
  );
}

export default Product;
