import React from "react";
import { Link } from "react-router-dom";
import hero from "../assets/hero.png";

function Hero() {
  return (
    <section className="relative py-1 px-2 md:h-screen overflow-hidden md:grid md:grid-cols-2 md:place-items-center block">
      {/* <img
        src={hero}
        alt="hero icon "
        className="absolute w-screen h-screen -z-10"
      /> */}
      <img src={hero} alt="hero icon" className="md:h-3/4 h-1/3"></img>
      <div className=" flex flex-col gap-y-5 items-center ">
        <h2 className="text-5xl  text-light-blue font-bold text-center">
          High Quality <span className="text-light-red">Furniture</span>
        </h2>
        <p className="md:break-words md:w-4/5 w-11/12 text-2xl">
          The best furniture for your new comfortable home. Comfortina is an
          egyptian company that provides high quality furniture for resonable
          prices
        </p>
        <div className="links flex justify-around w-4/5 my-2">
          <Link
            to="/products"
            className="px-3 py-2 bg-light-red font-bold text-white rounded-lg"
          >
            See our goodies
          </Link>
          <Link
            to="/contact"
            className="px-3 py-2 bg-light-red font-bold text-white rounded-lg"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
