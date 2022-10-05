import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "../App";
import SiteHeader from "./Header";
import Hero from "./Hero";
import HomeProducts from "./HomeProducts";

const AppContext = createContext();

function Home() {
  const [products, setProducts] = useState([]);
  const userContext = useContext(UserContext);

  useEffect(() => {
    axios
      .get("https://comfortina-api.vercel.app/api/v1/products?limit=2000")
      .then((res) => {
        setProducts(res.data.products);
      });
  }, []);
  return (
    products.length > 0 && (
      <AppContext.Provider value={{ products }}>
        <div className="relative w-screen box-border bg-gradient-to-b from-sky-400 to-sky-200 text-white">
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
