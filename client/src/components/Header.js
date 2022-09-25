import React from "react";
import Nav from "./Nav";
import Actions from "./Actions";

function SiteHeader() {
  return (
    <header className="grid grid-cols-3 p-5 items-center shadow-md bg-tranparent absolute z-10 w-full">
      <h1 className="logo text-3xl font-bold pointer-events-none text-white uppercase">
        Comfortina
      </h1>
      <Nav />
      <Actions />
    </header>
  );
}

export default SiteHeader;
