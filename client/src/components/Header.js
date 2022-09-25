import React from "react";
import Nav from "./Nav";
import Actions from "./Actions";

function SiteHeader() {
  return (
    <header className="grid grid-cols-3 p-5 items-center shadow-md">
      <h1 className="logo text-2xl font-bold pointer-events-none uppercase">
        Comfortina
      </h1>
      <Nav />
      <Actions />
    </header>
  );
}

export default SiteHeader;
