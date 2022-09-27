import React from "react";
import SiteHeader from "./Header";
import Hero from "./Hero";
import HomeProducts from "./HomeProducts";

function Home() {
  return (
    <div className="relative w-screen box-border">
      <SiteHeader absolute={true} />
      <Hero />
      <HomeProducts />
    </div>
  );
}

export default Home;
