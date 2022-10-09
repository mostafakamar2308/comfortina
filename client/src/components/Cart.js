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
        .post("https://comfortina-api.vercel.app/api/v1/products/cart", {
          token,
          productID: id,
        })
        .then((res) => {
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
        .get("https://comfortina-api.vercel.app/api/v1/products/" + ele)
        .then((response) => response.data);
    });
    Promise.all(products).then((res) => {
      setProductData(res);
    });
  }, [cart]);
  return (
    <div className="md:absolute shadow-xl h-screen w-screen overflow-y-auto rounded-lg bg-white  block z-40 p-5">
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
          <div className="text-3xl text-center font-bold leading-loose">
            No products in your cart
          </div>
        )}
      </div>
      {productData.length > 0 && (
        <div className="text-5xl font-bold text-center p-3">
          {productData.reduce((prev, curr) => {
            return prev + curr.product.price;
          }, 0)}
          EGP
        </div>
      )}
    </div>
  );
}

export default Cart;
