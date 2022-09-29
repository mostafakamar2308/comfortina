import React from "react";
import wish from "../assets/wishlist.png";
import cart from "../assets/shopping-cart.png";
import user from "../assets/user.png";
import { Link } from "react-router-dom";

function Actions() {
  return (
    <div className="flex justify-end gap-x-5 font-semibold">
      <button className="flex">
        <img src={wish} alt="wishList icon" className="h-9"></img>
        <p className="self-end text-sm">0</p>
      </button>
      <button className="flex">
        <img src={cart} alt="cart icon" className="h-9"></img>
        <p className="text-sm self-end">0</p>
      </button>
      <Link to="/login">
        <img src={user} alt="user icon " className="h-9"></img>
      </Link>
    </div>
  );
}

export default Actions;
