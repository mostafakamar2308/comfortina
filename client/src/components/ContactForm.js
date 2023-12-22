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
      className="w-full p-5 m-auto text-2xl border rounded-lg shadow-lg border-light-red h-96 shadow-chair"
      onSubmit={submitForm}
    >
      <div className="flex flex-col">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          required
          autoFocus
          onInput={handleFormInput}
          className="w-11/12 my-2 ml-2 text-black border-none rounded-md focus:outline-none"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email" className="group">
          E-mail
          <span className="mx-1 text-sm transition-all opacity-0 group-hover:opacity-100">
            will be replyed on
          </span>
        </label>
        <input
          id="email"
          type="email"
          onInput={handleFormInput}
          required
          className="w-11/12 my-2 ml-2 text-black border-none rounded-md focus:outline-none"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="msg">Message</label>
        <textarea
          id="msg"
          onInput={handleFormInput}
          required
          className="w-11/12 my-2 ml-2 text-black border rounded-md resize-none border-dark-blue focus:outline-none"
        />
      </div>
      <button className="block px-4 py-2 m-auto text-white transition-all duration-300 border border-white rounded-md bg-blue-dark hover:border-dark-blue">
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
