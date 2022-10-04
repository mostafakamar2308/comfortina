import axios from "axios";
import React, { useEffect, useState } from "react";
import close from "../assets/close.png";
import ProductBuy from "./productBuy";

function Cart({ handleOverLay, cart }) {
  const [productData, setProductData] = useState([]);

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
      <div>
        {productData.length > 0 ? (
          productData.map((ele) => {
            const product = ele.product;
            console.log(ele);
            return (
              <ProductBuy
                productId={product._id}
                productName={product.name}
                productPrice={product.price}
                productImg={product.img}
              />
            );
          })
        ) : (
          <div>No products in your cart</div>
        )}
      </div>
    </div>
  );
}

export default Cart;
