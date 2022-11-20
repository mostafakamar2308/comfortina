import React from "react";
import ContactForm from "./ContactForm";
import FAQ from "./FAQ";
import SiteHeader from "./Header";

function Contact() {
  return (
    <div className="bg-brown-light text-white min-h-screen h-full">
      <SiteHeader activepage={2} />
      <section className="md:grid md:grid-cols-contact min-h-screenMinus p-3 md:place-items-center">
        <div className="md:border-r p-3 md:border-dark-blue">
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
