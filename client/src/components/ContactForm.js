import React from "react";

function ContactForm() {
  return (
    <form className="border border-light-red h-96 text-2xl p-5  shadow-lg shadow-dark-blue rounded-md w-fit m-auto">
      <div className="flex flex-col">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          required
          autoFocus
          className="w-11/12 border-b border-b-dark-blue ml-2 my-2 focus:outline-none"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          type="email"
          required
          className="w-11/12 border-b border-b-dark-blue ml-2 my-2 focus:outline-none"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="msg">Message</label>
        <textarea
          id="msg"
          required
          className="w-11/12 border border-dark-blue ml-2 my-2 rounded-md focus:outline-none"
        />
      </div>
      <button className="border-white border py-2 px-4 bg-light-red transition-all duration-300 text-white block m-auto rounded-md hover:border-dark-blue">
        Send Message
      </button>
    </form>
  );
}

export default ContactForm;
