import axios from "axios";
import React, { useEffect, useState } from "react";
import close from "../assets/close.png";
import ProductWish from "./ProductWish";

function Favorites({ handleOverLay, favorites }) {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    //It works
    const products = favorites.map((ele) => {
      return axios
        .get("/api/v1/products/" + ele)
        .then((response) => response.data);
    });
    Promise.all(products).then((res) => {
      setProductData(res);
    });
  }, [favorites]);

  return (
    <section className="fixed h-screen bg-white z-30 w-full p-5">
      <div className="flex items-center justify-between p-3">
        <h2 className="text-5xl font-bold">Favorites</h2>
        <button
          onClick={() => {
            handleOverLay(false);
          }}
        >
          <img src={close} width="40" alt="x" />
        </button>
      </div>
      <div className="grid gap-y-5 place-items-center h-24">
        {productData.length > 0 ? (
          productData.map((ele) => {
            const product = ele.product;
            return (
              <ProductWish
                key={product._id}
                productName={product.name}
                productImg={product.img}
                productPrice={product.price}
                productId={product._id}
              />
            );
          })
        ) : (
          <p className="text-4xl font-bold text-transparent  bg-clip-text bg-gradient-to-b from-gray-900 to-gray-600 ">
            Nothing in the favorites
          </p>
        )}
      </div>
    </section>
  );
}

export default Favorites;
