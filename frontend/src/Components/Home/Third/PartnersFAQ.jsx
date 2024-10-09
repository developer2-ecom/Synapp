import React, { useState } from "react";
import styles from "./PartnersFAQ.module.css";
import HighlightedText from "../../HighlightedText";
import Salesforce from "../../../assets/Property 1=Salesforce.com_logo 2.png"
import google from "../../../assets/Property 1=Google_2015_logo 2.png"
import Asana from "../../../assets/Property 1=Asana_logo 2.png"
import microsoft from "../../../assets/Microsoft_logo_(2012) 2.png"
import meta from "../../../assets/Frame 247.png"
import cisco from "../../../assets/Property 1=cisco-ar21 2 (1).png"
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
          <img src={microsoft} alt="microsoft" />
        </div>
      </section>{" "}
      <section className={styles.faq}>
        {" "}
        <h2>
          Frequently Asked{" "}
          <span className={styles.gradientText}>Questions</span>
        </h2>{" "}
        <div className={styles.faqItems}>
          {" "}
          {faqData.map((question, index) => (
            <div key={index} className={styles.faqItem}>
              {" "}
              <div className={styles.question} onClick={() => toggleFAQ(index)}>
                {" "}
                {question}{" "}
                <span className={styles.toggleIcon}>
                  {openQuestion === index ? "−" : "+"}
                </span>{" "}
              </div>{" "}
              {openQuestion === index && (
                <div className={styles.answer}>
                  {" "}
                  {/* Placeholder answer text */} Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.{" "}
                </div>
              )}{" "}
            </div>
          ))}{" "}
        </div>{" "}
      </section>{" "}
    </div>
  );
};
export default PartnersFAQ;
