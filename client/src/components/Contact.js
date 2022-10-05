import React from "react";
import ContactForm from "./ContactForm";
import FAQ from "./FAQ";
import SiteHeader from "./Header";

function Contact() {
  return (
    <div className="bg-gradient-to-b from-sky-400 to-sky-200 text-white min-h-screen">
      <SiteHeader />
      <section className="grid grid-cols-contact h-screenMinus p-3">
        <div className="border-r p-3 border-dark-blue">
          <h3 className="text-3xl font-bold my-3 text-dark-blue">
            Why you should talk to us:
          </h3>
          <FAQ />
        </div>
        <div className="flex justify-center items-center">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}

export default Contact;
