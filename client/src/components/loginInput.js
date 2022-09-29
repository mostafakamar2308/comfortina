import React from "react";

function LoginInput({ placeholder, id, handleInput, type, img, label }) {
  return (
    <>
      <div className="border-b p-1 border-b-dark-blue group flex py-3 gap-x-2">
        <img src={img} alt="login img" width={20} />
        <input
          className="focus:outline-none"
          placeholder={placeholder}
          id={id}
          onInput={handleInput}
          type={type}
        />
      </div>
    </>
  );
}

export default LoginInput;
