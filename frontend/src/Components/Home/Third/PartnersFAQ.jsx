import React, { useState } from "react";
import styles from "./PartnersFAQ.module.css";
import HighlightedText from "../../HighlightedText";
import Salesforce from "../../../assets/Property 1=Salesforce.com_logo 2.png";
import google from "../../../assets/Property 1=Google_2015_logo 2.png";
import Asana from "../../../assets/Property 1=Asana_logo 2.png";
import microsoft from "../../../assets/Microsoft_logo_(2012) 2.png";
import meta from "../../../assets/Frame 247.png";
import cisco from "../../../assets/Property 1=cisco-ar21 2 (1).png";
import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";

const PartnersFAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(null);
  const toggleFAQ = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };
  const faqData = [
    "What services does SYNAPP offer?",
    "How can SYNAPP's AI integration benefit my business?",
    "Why should I choose SYNAPP for app development?",
    "How do SYNAPP's API solutions improve system connectivity?",
    "What are the advantages of using SYNAPP's Microsoft Cloud and AWS DevOps services?",
  ];
  return (
    <div className={styles.container}>
      {" "}
      <section className={styles.partners}>
        {" "}
        <h1>
          Our <HighlightedText text="Partners"></HighlightedText>
        </h1>{" "}
        <div className={styles.partnerLogos}>
          <img src={meta} alt="Meta" />
          <img src={google} alt="Google" />
          <img src={cisco} alt="Cisco" />
          <img src={google} alt="Google" />
          <img src={microsoft} alt="Microsoft" />
          <img src={Asana} alt="Asana" />
          <img src={Salesforce} alt="Salesforce" />
          <img src={google} alt="Google" />
          <img src={cisco} alt="Cisco" />
          <img src={cisco} alt="Cisco" />
        </div>
      </section>
      <section className={styles.faq}>
        <h2>
          Frequently Asked <HighlightedText text="Questions "></HighlightedText>
        </h2>

        <div className={styles.faqItems}>
          {faqData.map((question, index) => (
            <div
              key={index}
              className={`${styles.faqItem} ${
                openQuestion === index ? styles.open : ""
              }`}
            >
              <div className={styles.question}>
                {question}
                <span
                  className={styles.toggleIcon}
                  onClick={() => toggleFAQ(index)}
                >
                  {openQuestion === index ? <SlArrowUp /> : <SlArrowDown />}
                </span>
              </div>
              {openQuestion === index && (
                <div className={styles.answer}>
                  At SYNAPP, we provide a comprehensive range of digital
                  services, including Al integration, API solutions, app
                  development (both hybrid and native applications), Learning
                  Management System (LMS) development, Customer Relationship
                  Management (CRM) solutions, Microsoft Cloud Services
                  (Dynamics, Power BI, SaaS, Share Point), and AWS DevOps. Our
                  team of experts tailors each service to meet your unique
                  business needs, ensuring seamless digital transformation and
                  operational efficiency.
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
export default PartnersFAQ;
