import React from "react";
import { Link } from "react-router-dom";
import hero from "../assets/hero (2).jpg";

function Hero() {
  return (
    <section className="hero relative h-screen overflow-hidden flex justify-center items-center">
      <img
        src={hero}
        alt="hero icon "
        className="absolute w-screen h-screen -z-10"
      />
      <div className="info translate-x-1/2  flex flex-col gap-y-5">
        <h2 className="text-5xl text-light-blue font-bold ">
          High Quality <span className="text-light-red">Furniture</span>
        </h2>
        <p className="break-words w-2/5 text-2xl">
          The best furniture for your new comfortable home. Comfortina is an
          egyptian company that provides high quality furniture for resonable
          prices
        </p>
        <div className="links flex justify-around w-2/5">
          <Link
            to="/products"
            className="px-3 py-2 bg-black text-white rounded-lg"
          >
            See our goodies
          </Link>
          <Link
            to="/products"
            className="px-3 py-2 bg-black text-white rounded-lg"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
