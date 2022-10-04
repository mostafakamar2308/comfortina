import axios from "axios";
import React, { useEffect, useState } from "react";
import close from "../assets/close.png";
import ProductBuy from "./productBuy";

function Cart({ handleOverLay, cart, handleCart }) {
  const [productData, setProductData] = useState([]);
  const removeItem = (id) => {
    if (window.localStorage.getItem("userToken")) {
      const token = window.localStorage.getItem("userToken");
      axios
        .post("http://localhost:5000/api/v1/products/cart", {
          token,
          productID: id,
        })
        .then((res) => {
          console.log(res);
          const inCart = cart.filter((ele) => ele === id);
          if (inCart.length > 0) {
            handleCart((prev) => {
              return prev.filter((ele) => ele !== id);
            });
          } else {
            handleCart((prev) => [...prev, id]);
          }
        });
    }
  };

  useEffect(() => {
    //It works
    const products = cart.map((ele) => {
      return axios
        .get("http://localhost:5000/api/v1/products/" + ele)
        .then((response) => response.data);
    });
    Promise.all(products).then((res) => {
      setProductData(res);
    });
  }, [cart]);
  return (
    <div className="absolute min-h-full bg-white w-full z-40 p-5">
      <div className="flex justify-between ">
        <h2 className="text-5xl font-bold">Cart</h2>
        <button
          onClick={() => {
            handleOverLay(false);
          }}
        >
          <img src={close} alt="close overLay" className="w-10"></img>
        </button>
      </div>
      <div className="flex flex-col justify-center items-center p-2 gap-5">
        {productData.length > 0 ? (
          productData.map((ele) => {
            const product = ele.product;
            return (
              <ProductBuy
                removeItem={removeItem}
                productId={product._id}
                productName={product.name}
                productPrice={product.price}
                productImg={product.img}
              />
            );
          })
        ) : (
          <div className="text-3xl font-bold leading-loose">
            No products in your cart
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
