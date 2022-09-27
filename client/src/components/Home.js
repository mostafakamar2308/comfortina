import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import SiteHeader from "./Header";
import Hero from "./Hero";
import HomeProducts from "./HomeProducts";

const AppContext = createContext();

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/products?limit=2000")
      .then((res) => {
        setProducts(res.data.products);
      });
  }, []);
  return (
    products.length > 0 && (
      <AppContext.Provider value={{ products }}>
        <div className="relative w-screen box-border">
          <SiteHeader absolute={true} />
          <Hero />
          <HomeProducts />
        </div>
      </AppContext.Provider>
    )
  );
}
export { AppContext };

export default Home;
