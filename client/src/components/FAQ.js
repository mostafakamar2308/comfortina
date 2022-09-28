import React from "react";
import Accordion from "./Accordion";

function FAQ() {
  const faq = [
    {
      summary: "We can provide The most comfortable furniture",
      details:
        "Our Furniture is the best in the region. With many testimonials of our clients, We are sure that you would find what you are looking for in our store",
    },
    {
      summary: "We can provide Designing Services for your home/office",
      details:
        "Not only we can give you comfortable furniture, we can also help you arrange your place. Our Interior Design team has helped many clients over the years and we Can assure you, You won't regret your choice",
    },
    {
      summary:
        "You can give us recommendations of what we can do to enhance to quality of our products",
      details: `Comfortina isn't our company, it's also yours. As it's made to serve you in the first place, So we appreciate your feedback to enchance the quality. 
    We also take special orders, So you can call us at anytime`,
    },
    {
      summary: "If you are looking For a job, We can help you with that",
      details: `Comfortina loves to help people, so as long as you are willing to learn and you appericiate Islam, You will be a good fit `,
    },
    {
      summary:
        "We can provide counsiling Services about the furniture buisseness",
      details: `Our Prophet Mohamed (PBUH) said "The best of people are those who are most beneficial to people", so if you own a company or looking to start one and not sure where to begin, you can talk to us anytime`,
    },
  ];
  return (
    <div className="flex flex-col gap-2 ml-2">
      {faq.map((ele) => (
        <Accordion
          key={ele.details}
          summary={ele.summary}
          details={ele.details}
        />
      ))}
    </div>
  );
}

export default FAQ;
