import React, { useContext, useEffect, useState } from "react";
import wish from "../assets/wishlist.png";
import cart from "../assets/shopping-cart.png";
import user from "../assets/user.png";
import { Link } from "react-router-dom";
import { Overlay, UserContext } from "../App";

function Actions() {
  const context = useContext(UserContext);
  const overlay = useContext(Overlay);
  const [favoriteCounter, setFavoriteCounter] = useState(0);
  const [cartCounter, setCartCounter] = useState(0);

  useEffect(() => {
    setFavoriteCounter(context.favoriteList.length);
  }, [context.favoriteList.length]);
  useEffect(() => {
    setCartCounter(context.cart.length);
  }, [context.cart.length]);

  return (
    <div className="flex justify-between pl-3 mt-2 font-semibold md:pl-0 md:flex-row md:justify-end md:gap-x-5">
      <button
        className="flex items-center"
        onClick={() => {
          overlay.setFavoriteOverlay((prev) => !prev);
        }}
      >
        <img src={wish} alt="wishList icon" className="h-9 invert"></img>
        <p className="self-end text-sm text-black md:text-white">
          {favoriteCounter || 0}
        </p>
      </button>
      <button
        className="flex items-center"
        onClick={() => {
          overlay.setCartOverlay((prev) => !prev);
        }}
      >
        <img src={cart} alt="cart icon" className="h-9 invert"></img>
        <p className="self-end text-sm text-black md:text-white">
          {cartCounter}
        </p>
      </button>
      {context.user ? (
        <button className="p-2 my-2 text-center text-black rounded-full outline outline-2 hover:outline-4 md:text-white">
          {context.user &&
            context.user.name
              .split(" ")
              .map((ele) => ele[0])
              .join("")}
        </button>
      ) : (
        <Link to="/login">
          <img src={user} alt="user icon " className="h-9 invert"></img>
        </Link>
      )}
    </div>
  );
}

export default Actions;
