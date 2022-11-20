import React, { useState } from "react";
import axios from "axios";

function ContactForm() {
  const [formData, setFormData] = useState({
    msg: "",
    name: "",
    email: "",
  });
  const [sentData, setSentData] = useState(false);
  const [done, setDone] = useState(false);

  const handleFormInput = (e) => {
    setFormData((prevData) => {
      return { ...prevData, [e.target.id]: e.target.value };
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post("https://comfortina-api.vercel.app/api/v1/contact", { ...formData })
      .then((res) => {
        setDone(true);
        res.data.code === 200 ? setSentData(true) : setSentData(false);
      });
  };
  return (
    <form
      className="border border-light-red h-96 text-2xl p-5  shadow-lg shadow-dark-blue rounded-md w-fit m-auto"
      onSubmit={submitForm}
    >
      <div className="flex flex-col">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          required
          autoFocus
          onInput={handleFormInput}
          className="w-11/12 border-b border-b-dark-blue ml-2 my-2 focus:outline-none text-black rounded-md"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email" className="group">
          E-mail
          <span className="text-sm opacity-0 group-hover:opacity-100 transition-all mx-1">
            will be replyed on
          </span>
        </label>
        <input
          id="email"
          type="email"
          onInput={handleFormInput}
          required
          className="w-11/12 border-b border-b-dark-blue ml-2 my-2 focus:outline-none text-black rounded-md"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="msg">Message</label>
        <textarea
          id="msg"
          onInput={handleFormInput}
          required
          className="w-11/12 border border-dark-blue ml-2 my-2 rounded-md focus:outline-none resize-none text-black"
        />
      </div>
      <button className="border-white border py-2 px-4 bg-blue-dark transition-all duration-300 text-white block m-auto rounded-md hover:border-dark-blue">
        Send Message
      </button>
      {done === true && (
        <div
          className={`msg text-center text-sm ${
            sentData === true ? "text-green-500" : "text-red-500"
          }`}
        >
          {sentData === true ? "Sent Successfully" : "Please Try Again"}
        </div>
      )}
    </form>
  );
}

export default ContactForm;
