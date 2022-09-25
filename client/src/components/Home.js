import React from "react";
import SiteHeader from "./Header";
import Hero from "./Hero";

function Home() {
  return (
    <div className="relative w-screen box-border">
      <SiteHeader />
      <Hero />
    </div>
  );
}

export default Home;
