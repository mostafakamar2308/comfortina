import React, { useContext, useEffect, useState } from "react";
import unloved from "../assets/unlovedheart.png";
import loved from "../assets/lovedheart.png";
import axios from "axios";
import buy from "../assets/buy.png";
import unbuy from "../assets/unbuy.png";
import { UserContext } from "../App";
import { useNavigate } from "react-router-dom";

function Product({
  productName,
  productPrice,
  productImg,
  productSale,
  productId,
}) {
  const [lovedBtn, setLovedBtn] = useState(false);
  const [buyBtn, setBuyBtn] = useState(false);
  const user = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    const loved = user.favoriteList.filter((ele) => ele === productId);
    loved.length > 0 ? setLovedBtn(true) : setLovedBtn(false);
    const cartItem = user.cart.filter((ele) => ele === productId);
    cartItem.length > 0 ? setBuyBtn(true) : setBuyBtn(false);
  }, [productId]);

  const handleFavorite = (e) => {
    const productID = e.target.getAttribute("dataid");
    if (window.localStorage.getItem("userToken")) {
      const token = window.localStorage.getItem("userToken");
      axios
        .post("https://comfortina-api.vercel.app/api/v1/products/favorite", {
          token,
          productID,
        })
        .then((res) => {
          const loved = user.favoriteList.filter((ele) => ele === productId);
          if (loved.length > 0) {
            user.setFavoriteList((prev) => {
              return prev.filter((ele) => ele !== productId);
            });
          } else {
            user.setFavoriteList((prev) => [...prev, productId]);
          }
          setLovedBtn((prev) => !prev);
        });
    } else {
      return navigate("/login");
    }
  };

  const handleBuy = (e) => {
    const productID = e.target.getAttribute("dataid");
    if (window.localStorage.getItem("userToken")) {
      const token = window.localStorage.getItem("userToken");
      axios
        .post("https://comfortina-api.vercel.app/api/v1/products/cart", {
          token,
          productID,
        })
        .then((res) => {
          const cart = user.cart.filter((ele) => ele === productId);
          if (cart.length > 0) {
            user.setCart((prev) => {
              return prev.filter((ele) => ele !== productId);
            });
          } else {
            user.setCart((prev) => [...prev, productId]);
          }
          setBuyBtn((prev) => !prev);
        });
    } else {
      navigate("/login");
    }
  };
  return (
    <div
      className="relative flex flex-col items-center overflow-hidden text-black border rounded-md shadow-lg w-96 group"
      dataid={productId}
    >
      <button
        onClick={handleFavorite}
        dataid={productId}
        className="absolute z-50 flex items-center justify-center w-10 p-2 transition-all duration-300 border border-black rounded-full md:opacity-0 right-2 top-2 group-hover:opacity-100 lg:hover:scale-110 "
      >
        <img
          dataid={productId}
          src={!lovedBtn ? unloved : loved}
          alt="unloved"
          className="h-5"
        />
      </button>
      <div className="relative w-full">
        <img
          src={productImg}
          alt={productName}
          className="object-cover w-full"
        />
      </div>
      <div className=" grid grid-cols-[70%,30%] gap-2 items-center p-2 pr-4 w-full relative">
        <button
          dataid={productId}
          onClick={handleBuy}
          className="absolute top-0 p-3 transition-all duration-300 -translate-y-8 bg-white border-black rounded-full w-14 right-2 lg:hover:scale-105"
        >
          <img
            dataid={productId}
            src={!buyBtn ? buy : unbuy}
            alt="Buy items"
          ></img>
        </button>
        <h4 className="text-xl font-semibold"> {productName}</h4>
        <h4 className="text-right ">{productPrice} EGP</h4>
      </div>
      {productSale > 0 && <div> {productSale}</div>}
    </div>
  );
}

export default Product;
