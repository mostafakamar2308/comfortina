import React from "react";
import hero from "../assets/hero (2).jpg";
import searchIcon from "../assets/loupe.png";

function Hero() {
  const [searchValue, setSearchValue] = React.useState("");

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
        <div className="flex w-fit border-2 border-light-red shadow-md ">
          <input
            type="text"
            autoFocus={true}
            className="text-3xl bg-white h-10 indent-1 focus:outline-none py-1 px-2"
            onInput={(e) => setSearchValue(e.target.value)}
          />
          <button className="bg-white">
            <img src={searchIcon} alt="Search Icon" className="h-10 p-1" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
