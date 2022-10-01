import React, { useContext } from "react";
import wish from "../assets/wishlist.png";
import cart from "../assets/shopping-cart.png";
import user from "../assets/user.png";
import { Link } from "react-router-dom";
import { Overlay, UserContext } from "../App";

function Actions() {
  const context = useContext(UserContext);
  const overlay = useContext(Overlay);

  return (
    <div className="flex justify-end gap-x-5 font-semibold">
      <button
        className="flex"
        onClick={() => {
          overlay.setFavoriteOverlay((prev) => !prev);
        }}
      >
        <img src={wish} alt="wishList icon" className="h-9"></img>
        <p className="self-end text-sm">{context.favoriteList.length || 0}</p>
      </button>
      <button
        className="flex"
        onClick={() => {
          overlay.setCartOverlay((prev) => !prev);
        }}
      >
        <img src={cart} alt="cart icon" className="h-9"></img>
        <p className="text-sm self-end">0</p>
      </button>
      {context.user ? (
        <button className="text-center rounded-full outline outline-2 p-2 hover:outline-4">
          {context.user &&
            context.user.name
              .split(" ")
              .map((ele) => ele[0])
              .join("")}
        </button>
      ) : (
        <Link to="/login">
          <img src={user} alt="user icon " className="h-9"></img>
        </Link>
      )}
    </div>
  );
}

export default Actions;
