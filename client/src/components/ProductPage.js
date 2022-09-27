import React, { useContext } from "react";
import SiteHeader from "./Header";
import shelf from "../assets/shelf.png";
import table from "../assets/table.png";
import storage from "../assets/storage.png";
import desk from "../assets/desk.png";
import chair from "../assets/chair.png";
import { AppContext } from "../App";
import Product from "./Product";

function ProductPage() {
  const productsContext = useContext(AppContext);
  const newArr = productsContext.products.filter(
    (product) => product.type === "chair"
  );
  return (
    <>
      <SiteHeader absolute={false} />
      <section className="h-screen grid grid-cols-products relative">
        <div className="categories flex flex-col items-center top-0 gap-x-10 py-10">
          <button className="bg-header p-2 rounded-md flex justify-center items-center w-fit">
            <img src={shelf} alt="shelf icon" className="h-16" />
          </button>
          <button className=" p-2 rounded-md">
            <img src={table} alt="shelf icon" className="h-16" />
          </button>
          <button className=" p-2 rounded-md">
            <img src={storage} alt="shelf icon" className="h-16" />
          </button>
          <button className="p-2 rounded-md">
            <img src={desk} alt="shelf icon" className="h-16" />
          </button>
          <button className=" p-2 rounded-md">
            <img src={chair} alt="shelf icon" className="h-16" />
          </button>
        </div>
        <div className="flex flex-wrap justify-center gap-5">
          {newArr.map((ele) => {
            return (
              <Product
                productImg={ele.img}
                productName={ele.name}
                key={ele.id}
                productPrice={ele.price}
                productSale={ele.onSale}
                productId={ele.id}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}

export default ProductPage;
