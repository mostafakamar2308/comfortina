import React from "react";
import hero from "../assets/hero (2).jpg";

function Hero() {
  return (
    <section className="hero relative h-screen overflow-hidden flex justify-center items-center">
      <img
        src={hero}
        alt="hero icon "
        className="absolute bottom-0 w-screen -z-10"
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
      </div>
    </section>
  );
}

export default Hero;
