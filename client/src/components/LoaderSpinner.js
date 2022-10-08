import React from "react";

function LoaderSpinner({ btn }) {
  return (
    <div className={!btn ? "lds-facebook" : "btn-loader"}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default LoaderSpinner;
