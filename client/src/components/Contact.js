import React from "react";
import ContactForm from "./ContactForm";
import FAQ from "./FAQ";
import SiteHeader from "./Header";

function Contact() {
  return (
    <div className="h-full min-h-screen text-white bg-brown-light">
      <SiteHeader activepage={2} />
      <section className="flex flex-col items-center">
        <div className="p-3 md:w-5/6 md:border-dark-blue">
          <h3 className="my-3 text-3xl font-bold text-dark-blue">
            Why you should talk to us:
          </h3>
          <FAQ />
        </div>
        <hr className="w-full my-5" />
        <div className="flex items-center justify-center md:pb-2 md:w-1/3">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}

export default Contact;
