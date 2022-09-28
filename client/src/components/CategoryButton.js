import React from "react";

function CategoryButton({ setCategory, image, active, categoryName }) {
  return (
    <button
      className={`p-2 rounded-md ${active ? "bg-light-red" : ""}`}
      data-category={categoryName}
      onClick={setCategory}
    >
      <img src={image} alt={categoryName + " icon"} className="h-16" />
    </button>
  );
}

export default CategoryButton;
