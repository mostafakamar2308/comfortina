import React, { useEffect, useRef, useState } from "react";
import SiteHeader from "./Header";
import shelf from "../assets/shelf.png";
import table from "../assets/table.png";
import storage from "../assets/storage.png";
import desk from "../assets/desk.png";
import chair from "../assets/chair.png";
import Product from "./Product";
import axios from "axios";
import CategoryButton from "./CategoryButton";
import Pagination from "./Pagination";

function ProductPage() {
  const [products, setProducts] = useState();
  const [category, setCategory] = useState([
    { categoryName: "shelve", img: shelf, active: true },
    { categoryName: "chair", img: chair, active: false },
    { categoryName: "table", img: table, active: false },
    { categoryName: "storage", img: storage, active: false },
    { categoryName: "desk", img: desk, active: false },
  ]);
  const [page, setPage] = useState(0);
  useEffect(() => {
    axios
      .get(
        "http://localhost:5000/api/v1/products?type=" +
          category.filter((ele) => ele.active === true)[0].categoryName +
          "&limit=" +
          5000
      )
      .then((res) => {
        setProducts(res.data.products);
      });
  }, [category, page]);

  const changeCategory = (e) => {
    setCategory((prevCategoryList) => {
      const categoryName =
        e.target.getAttribute("data-category") ||
        e.target.parentNode.getAttribute("data-category");
      return prevCategoryList.map((category) => {
        if (category.categoryName === categoryName) {
          category.active = true;
          return category;
        } else {
          category.active = false;
          return category;
        }
      });
    });
    setPage(0);
  };

  const changePage = (e) => {
    const page = Number(e.target.textContent) - 1;
    setPage(page);
  };

  return (
    <>
      <SiteHeader absolute={false} />
      <section className="h-screen grid grid-cols-products relative">
        <div className="categories flex flex-col items-center top-0 gap-x-10 py-10 border-r border-dark-blue">
          {category.map((ele) => (
            <CategoryButton
              key={ele.categoryName}
              image={ele.img}
              active={ele.active}
              categoryName={ele.categoryName}
              setCategory={changeCategory}
            />
          ))}
        </div>
        <div className="">
          <div className="flex flex-wrap justify-center gap-5">
            {products &&
              products.slice(page * 10, (page + 1) * 10).map((ele) => {
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
          {products && (
            <Pagination
              itemsCount={products.length}
              pageLimit={10}
              currentPage={page}
              handlePagintation={changePage}
            />
          )}
        </div>
      </section>
    </>
  );
}

export default ProductPage;
