import React from "react";
import searchIcon from "../assets/loupe.png";

function Search({ handleSearchInput, handleSearch }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSearch();
      }}
      className="flex w-5/6 p-2 my-5 overflow-hidden bg-white border-2 rounded-full shadow-md md:w-11/12 border-light-red"
    >
      <button
        className="flex items-center justify-center w-1/6 bg-white border-none"
        onClick={handleSearch}
      >
        <img src={searchIcon} alt="Search Icon" className="h-10 p-1" />
      </button>
      <input
        type="text"
        className="w-10/12 h-10 px-2 py-1 text-xl text-black bg-white border-none focus:outline-none focus:shadow-none"
        onInput={(e) => handleSearchInput(e.target.value)}
      />
    </form>
  );
}

export default Search;
