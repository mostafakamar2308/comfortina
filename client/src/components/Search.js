import React from "react";
import searchIcon from "../assets/loupe.png";

function Search({ handleSearchInput, handleSearch }) {
  return (
    <div className="flex w-11/12 border-2 border-light-red shadow-md mx-2 my-5 ">
      <input
        type="text"
        autoFocus={true}
        className="text-3xl bg-white w-10/12 h-10 text-black focus:outline-none py-1 px-2"
        onInput={(e) => handleSearchInput(e.target.value)}
      />
      <button className="bg-white" onClick={handleSearch}>
        <img src={searchIcon} alt="Search Icon" className="h-10 p-1" />
      </button>
    </div>
  );
}

export default Search;
