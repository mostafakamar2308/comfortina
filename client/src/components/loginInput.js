import React from "react";

function LoginInput({ placeholder, id, handleInput, type, img, label }) {
  return (
    <div className="border-b  border-b-dark-blue group flex py-3 gap-x-2 w-fit">
      <img src={img} alt="login img" width={30} />
      <input
        required
        className="focus:outline-none active:outline-none outline-none border-none"
        placeholder={placeholder}
        id={id}
        onInput={handleInput}
        type={type}
      />
    </div>
  );
}

export default LoginInput;
