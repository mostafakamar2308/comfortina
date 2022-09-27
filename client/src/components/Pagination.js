import React, { useEffect, useState } from "react";

function Pagination({ itemsCount, pageLimit, currentPage, handlePagintation }) {
  const pages = Math.ceil(itemsCount / pageLimit);
  const [arr, setArr] = useState([]);
  const paginationFN = () => {
    const array = [];
    for (let i = 0; i < pages; i++) {
      if (i == currentPage) {
        array.push({ page: i + 1, active: true });
      } else {
        array.push({ page: i + 1, active: false });
      }
    }
    setArr(array);
  };
  useEffect(() => {
    paginationFN();
  }, [pages, currentPage]);
  return (
    <div className="flex justify-center gap-2">
      {arr.length > 0 &&
        arr.map((ele) => (
          <button
            onClick={handlePagintation}
            key={ele.page}
            className={
              ele.active
                ? "border border-dark-blue  text-white p-2 w-10 h-10 bg-light-red"
                : " border border-dark-blue   p-2 w-10 h-10"
            }
          >
            {ele.page}
          </button>
        ))}
    </div>
  );
}

export default Pagination;
