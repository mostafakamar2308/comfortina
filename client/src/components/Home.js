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
        console.log();
        setProducts(res.data.products);
      });
  }, []);
  return (
    products.length > 0 && (
      <AppContext.Provider value={{ products }}>
        <div className="relative w-full box-border bg-brown-light text-white">
          <SiteHeader absolute={false} activepage={0} />
          <Hero />
          <HomeProducts />
        </div>
      </AppContext.Provider>
    )
  );
}
export { AppContext };

export default Home;
