import React, { useContext, useState } from "react";
import SiteHeader from "./Header";
import LoginInput from "./loginInput";
import mail from "../assets/mail.png";
import pass from "../assets/padlock.png";
import name from "../assets/name.png";
import user from "../assets/user (1).png";
import { Link } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../App";

function Register() {
  const [registerData, setRegisterData] = useState({
    email: "",
    password: "",
    name: "",
    username: "",
  });
  const userContext = useContext(UserContext);

  const handleInput = (e) => {
    setRegisterData((prev) => {
      return { ...prev, [e.target.id]: e.target.value };
    });
  };

  const registerUser = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/v1/register", { ...registerData })
      .then((res) => {
        console.log(res.data);
        window.localStorage.setItem("userToken", res.data.token);
        userContext.setUser(res.data.user);
      });
  };
  return (
    <div className="bg-gradient-to-b from-sky-400 to-sky-200 text-black">
      <SiteHeader />
      <div className="gap-y-2 h-screen flex flex-col items-center justify-center">
        <form className="flex flex-col justify-around items-center h-5/6 gap-y-2 bg-white w-96 rounded-md">
          <h2 className="text-4xl font-bold pointer-events-none">Register</h2>
          <div className="flex flex-col gap-y-4 w-3/5">
            <LoginInput
              placeholder="Enter your Name"
              id="name"
              handleInput={handleInput}
              type="text"
              label="Name"
              img={name}
            />
            <LoginInput
              placeholder="Enter your username"
              handleInput={handleInput}
              id="username"
              type="text"
              label="User Name"
              img={user}
            />
            <LoginInput
              placeholder="Enter your Email"
              id="email"
              type="email"
              handleInput={handleInput}
              label="Email"
              img={mail}
            />
            <LoginInput
              placeholder="Enter your password"
              handleInput={handleInput}
              id="password"
              type="password"
              label="Password"
              img={pass}
            />
            <button
              type="submit"
              onClick={registerUser}
              className="border py-1 px-2 w-2/3 text-white font-bold block m-auto rounded-2xl bg-gradient-to-r from-rose-500 via-red-400 to-red-500"
            >
              Log In
            </button>
          </div>
          <Link to="/login" className="text-blue-700 hover:text-black my-2">
            Log In
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Register;
