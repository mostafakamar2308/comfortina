import React from "react";
import SiteHeader from "./Header";
import LoginInput from "./loginInput";
import mail from "../assets/mail.png";
import pass from "../assets/padlock.png";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="bg-gradient-to-b from-sky-400 to-sky-200 text-black">
      <SiteHeader />
      <div className="gap-y-2 h-screen flex flex-col items-center justify-center">
        <form className="flex flex-col justify-around items-center h-5/6 gap-y-2 bg-white w-96 rounded-md">
          <h2 className="text-5xl font-bold pointer-events-none">LOGIN</h2>
          <div className="flex flex-col gap-y-4">
            <LoginInput
              placeholder="Enter your Email"
              id="email"
              type="email"
              label="Email"
              img={mail}
            />
            <LoginInput
              placeholder="Enter your password"
              id="password"
              type="password"
              label="Password"
              img={pass}
            />
            <button
              type="submit"
              className="border py-1 px-2 w-2/3 text-white font-bold block m-auto rounded-2xl bg-gradient-to-r from-rose-500 via-red-400 to-red-500"
            >
              Log In
            </button>
          </div>
          <Link to="/register" className="text-blue-700 hover:text-black my-2">
            Create New Account
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
