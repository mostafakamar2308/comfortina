import React from "react";
import Nav from "./Nav";
import Actions from "./Actions";

function SiteHeader(props) {
  return (
    <header
      className={
        props.absolute
          ? "absolute grid grid-cols-3 p-5 items-center shadow-lg bg-tranparent  z-10 w-full "
          : "grid grid-cols-3 p-5 items-center shadow-lg bg-tranparent  z-10 w-full border-b border-b-dark-blue"
      }
    >
      <h1 className="logo text-3xl font-bold pointer-events-none text-white uppercase">
        Comfortina
      </h1>
      <Nav />
      <Actions />
    </header>
  );
}

export default SiteHeader;
