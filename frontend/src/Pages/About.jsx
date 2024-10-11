import React, { useState } from "react";
import styles from "./About.module.css";
import serviceImage from "../assets/thisisengineering-6DSItOWspGY-unsplash 1.png";
import { FaArrowRight } from "react-icons/fa6";
import HighlightedText from "../Components/HighlightedText";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import AnalysisDataOfWeb from "../Components/ServiceSection/AnalysisDataOfWeb";
import MessageForm from "../Components/Home/Third/MessageForm";
import Footer from "../Components/Home/Third/Footer";

const About = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleFAQ = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqData = [
    {
      question: "Code of business ethics",
      answer:
        "SYNAPP is all about leveraging cutting-edge technology to create meaningful change. Our bespoke solutions drive growth, efficiency, and innovation for clients, teams, and communities. From AI integration and app development to CRM, cloud solutions and A LOT MORE, we deliver excellence and positive impact.",
    },
    {
      question: "Inclusion and Diversity",
      answer:
        "We believe that diversity drives innovation. SYNAPP is dedicated to creating an inclusive environment where everyone feels valued and empowered. Our diverse team brings a wealth of perspectives, fostering creativity and ensuring that we deliver solutions that cater to a global audience.",
    },
    {
      question: "Responsible AI",
      answer:
        "SYNAPP is at the forefront of ethical AI development. We prioritize fairness, accountability, and transparency in our AI solutions, ensuring they are designed and implemented with the highest ethical standards. Our responsible AI practices guarantee technology that is beneficial and equitable.",
    },
    {
      question: "Transparent Workforce Reporting",
      answer:
        "Transparency is integral to SYNAPP’s ethos. Our open and honest workforce reporting provides clear insights into our team’s structure, capabilities, and commitment to excellence. This transparency fosters trust and demonstrates our dedication to achieving your business objectives.",
    },
  ];

  return (
    <div className={styles.container}>
      <section className={styles.introSection}>
        <div className={styles.textSection}>
          <h1 className={styles.title}>
            <HighlightedText text="360° value"></HighlightedText> is at the
            heart of SYNAPP
          </h1>
          <p className={styles.subtitle}>
            At SYNAPP, we deliver 360° digital innovation, revolutionizing
            businesses and creating exceptional value globally. Our tailored
            solutions enhance efficiency, drive growth, and foster innovation.
          </p>
          <button className={styles.appointmentButton}>
            <span>Connect now</span>
            <FaArrowRight className={styles.icon} />
          </button>
        </div>
        <div className={styles.imageContainer}>
          <img
            src={serviceImage}
            alt="Team working on technology"
            className={styles.image}
          />
        </div>
      </section>

      <section className={styles.serviceSection}>
        <h2 className={styles.serviceTitle}>
          Creating Transformative{" "}
          <HighlightedText text="Impact"></HighlightedText>, Everyday!
        </h2>
        <p className={styles.serviceDescription}>
          SYNAPP is all about leveraging cutting-edge technology to create
          meaningful change. Our bespoke solutions drive growth, efficiency, and
          innovation for clients, teams, and communities. From AI integration
          and app development to CRM, cloud solutions and A LOT MORE, we deliver
          excellence and positive impact.
        </p>
      </section>

      {/* <section className={styles.faq}>
        <div className={styles.faqItems}>
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`${styles.faqItem} ${
                openQuestion === index ? styles.open : ""
              }`}
            >
              <div className={styles.question} onClick={() => toggleFAQ(index)}>
                {item.question}
                <span className={styles.toggleIcon}>
                  {openQuestion === index ? <FaMinus /> : <FaPlus />}
                </span>
              </div>
              {openQuestion === index && (
                <div className={styles.answer}>{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </section> */}

      <section className={styles.faq}>
        <div className={styles.faqItems}>
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`${styles.faqItem} ${
                openQuestion === index ? styles.open : ""
              }`}
            >
              <div className={styles.question} onClick={() => toggleFAQ(index)}>
                {item.question}
                <span
                  className={`${styles.toggleIcon} ${
                    openQuestion === index ? styles.open : ""
                  }`}
                >
                  {openQuestion === index ? <FaMinus /> : <FaPlus />}
                </span>
              </div>
              <div
                className={`${styles.answer} ${
                  openQuestion === index ? styles.open : ""
                }`}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ___________________________________________ */}


      <div className={styles.containerForAnalysis}>
      <h1 className={styles.titleForAnalysis}>
        How Clients Are <HighlightedText text="Transforming" /> with synapp!?
      </h1>
      <p className={styles.subtitleForAnalysis}>
      See how SYNAPP’s software and technical services drive real business results. 
      </p>
      <div className={styles.statsContainer}>
        <div className={styles.statBox}>
          <h2 className={styles.statValue}>96%</h2>
          <p className={styles.statDescription}>
            Improvement in data processing efficiency
          </p>
        </div>
        <div className={styles.verticalLine}></div>
        <div className={styles.statBox}>
          <h2 className={styles.statValue}>75%</h2>
          <p className={styles.statDescription}>
            Improvement in user engagement on apps
          </p>
        </div>
        <div className={styles.verticalLine}></div>
        <div className={styles.statBox}>
          <h2 className={styles.statValue}>60%</h2>
          <p className={styles.statDescription}>Projects Delivered</p>
        </div>
      </div>
    </div>

    {/* _____________________________________________________________ */}
      <MessageForm></MessageForm>
      <Footer></Footer>
    </div>
  );
};

export default About;
