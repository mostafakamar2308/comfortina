import React, { useEffect, useState } from "react";
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
import Search from "./Search";
import notFound from "../assets/404.png";

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
  const [searchValue, setSearchValue] = React.useState("");
  useEffect(() => {
    search();
  }, [category, page]);

  const search = () => {
    axios
      .get(
        "http://localhost:5000/api/v1/products?type=" +
          category.filter((ele) => ele.active === true)[0].categoryName +
          "&name=" +
          searchValue +
          "&limit=" +
          5000
      )
      .then((res) => {
        setProducts(res.data.products);
      });
  };

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
    <div className="bg-gradient-to-b from-sky-400 to-sky-200 text-white h-fit">
      <SiteHeader absolute={false} />
      <section className="grid grid-cols-products relative">
        <div className="categories flex flex-col items-center top-0 gap-x-10 py-10 border-r border-dark-blue">
          <Search handleSearchInput={setSearchValue} handleSearch={search} />
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
          <div className="flex flex-wrap justify-center gap-5 p-3">
            {products &&
              (products.length > 0 ? (
                products.slice(page * 10, (page + 1) * 10).map((ele) => {
                  return (
                    <Product
                      key={ele._id}
                      productImg={ele.img}
                      productName={ele.name}
                      productPrice={ele.price}
                      productSale={ele.onSale}
                      productId={ele._id}
                    />
                  );
                })
              ) : (
                <div className="flex flex-col justify-center items-center h-screen">
                  <img src={notFound} alt={notFound} />
                  <p className="text-3xl font-bold">
                    Sorry, We didn't find what you are looking for &#128532;
                  </p>
                  <p className="text-xl font-bold my-3">
                    Search about Something else
                  </p>
                </div>
              ))}
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
    </div>
  );
}

export default ProductPage;
