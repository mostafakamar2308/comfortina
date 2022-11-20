import React from "react";

function Accordion({ summary, details }) {
  return (
    <details className="border p-3 rounded-md shadow-md text-white bg-blue-dark open:bg-dark-blue ">
      <summary className="text-xl cursor-pointer">{summary}</summary>
      <p className="text-lg ml-8 pl-1 ">{details}</p>
    </details>
  );
}

export default Accordion;
