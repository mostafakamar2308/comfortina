import axios from "axios";
import React, { useEffect, useState } from "react";
import close from "../assets/close.png";

function Favorites({ handleOverLay, favorites }) {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    //DOESN"T WORK
    setProductData((prev) => {
      return favorites.map(async (ele) => {
        const res = await axios.get(
          "http://localhost:5000/api/v1/products/" + ele
        );
        return res.data.product;
      });
    });
  }, []);

  return (
    <section className="absolute h-screen bg-white z-30 w-full p-5">
      <button
        className="absolute right-10 top-8"
        onClick={() => {
          handleOverLay(false);
        }}
      >
        <img src={close} width="40" alt="x" />
      </button>
      <h2 className="text-3xl font-bold">Favorites</h2>
      <div>
        {productData &&
          productData.map((ele) => {
            console.log(ele);
            return (
              <div key={ele._id} className="text-black">
                {ele.name}
              </div>
            );
          })}
      </div>
    </section>
  );
}

export default Favorites;
