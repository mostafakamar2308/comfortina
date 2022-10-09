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
  }, []);

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
      console.log("un logged");
      navigate("/login");
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
        className="absolute lg:hidden border border-black rounded-full p-1 lg:opacity-0 transition-all duration-300 right-2 top-2 group-hover:block group-hover:opacity-100 "
      >
        <img
          dataid={productId}
          src={!lovedBtn ? unloved : loved}
          alt="unloved"
          className="h-5"
        />
      </button>
      <div className="relative">
        <img src={productImg} alt={productName} />
        <button
          dataid={productId}
          onClick={handleBuy}
          className="absolute bottom-2 right-2 w-10 lg:opacity-0 transition-all border rounded-full p-2 border-black duration-300 group-hover:opacity-100"
        >
          <img
            dataid={productId}
            src={!buyBtn ? buy : unbuy}
            alt="Buy items"
          ></img>
        </button>
      </div>
      <h4 className="text-md clamp"> {productName}</h4>
      <h4 className="font-bold">{productPrice} EGP</h4>
      {productSale > 0 && <div> {productSale}</div>}
    </div>
  );
}

export default Product;
