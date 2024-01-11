import React, { useState } from 'react';
import Navbar from "../../components/Home/Navbar/Navbar";
import "./service.css";

function Service() {
  const services = [
    {
      id: 1,
      name: "24*7 customer service(Call & Chat)",
      description:
        "Our customer service team is available round the clock to assist you. Whether you prefer calling or chatting online, our dedicated support team is here to help you with any queries or issues you might have.",
    },
    {
      id: 2,
      name: "Secured and Verified payment options(mastercard, visa, maestro, rupay)",
      description:
        "We ensure secure and verified payment options for your convenience. Our platform accepts major cards including Mastercard, Visa, Maestro, and RuPay. Your transactions are encrypted and processed securely to provide you with a safe payment experience.",
    },
    // ...more services
  ];

  const faqs = [
    {
      category: 'General',
      questions: [
        {
          question: 'How can I book bus tickets on e-connect?',
          answer:
            'You can book bus tickets on e-connect by visiting our website. Simply enter your departure and arrival locations, select your travel date, choose a bus, and complete the booking process by providing necessary details.',
        },
        {
          question: 'Can I change the date of my journey after I have booked my bus ticket?',
          answer:
            'Yes, some tickets might be amendable with a fee. You can check the terms and conditions or contact our customer support for assistance.',
        },
        {
          question: 'I have lost my ticket. What should I do now?',
          answer:
             'A copy of the bus ticket would have been sent to you by email when you booked bus ticket online. Please take a printout of that mail and produce it at the time of boarding. If you have not received the ticket e-mail, please call any of our call centers and our executive will resend you a copy by mail.' 
        }
      ],
    },
  ];

  // State to handle the currently active dropdown item
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = index => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="service">
      <Navbar flag={false} />
      <div className="service-content">
        <h2>Eticket Connect Services</h2>
        {services.map((service) => (
          <div key={service.id}>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <hr /> {/* Optional: Adding a horizontal line between services */}
          </div>
        ))}
      </div>
      <div className="service-FAQ">
      <h2>FAQs</h2>
      {faqs.map((category, categoryIndex) => (
        <div key={category.category}>
          <h3>{category.category}</h3>
          <ul>
            {category.questions.map((faq, faqIndex) => (
              <li key={faqIndex}>
                <div className="faq-item">
                  <button
                    className="faq-question"
                    onClick={() => toggleAccordion(faqIndex)}
                  >
                    {faq.question}
                  </button>
                  {activeIndex === faqIndex && (
                    <div className="faq-answer">{faq.answer}</div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
      </div>
    </div>
  );
}
export default Service;