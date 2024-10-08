import React from "react";
import styles from "./FirstHome.module.css";
import { MdOutlineArrowForward } from "react-icons/md";
import HighlightedText from "../../HighlightedText";
import image1 from "../../../assets/Default_A_female_wearing_VR_headsets_on_a_pastel_lavender_and_2 1.png";
import image2 from "../../../assets/thisisengineering-6DSItOWspGY-unsplash 1.png";
import videoSrc from "../../../assets/-5975-4cbb-87aa-3c4a8e66e58c.mp4";
const FirstHome = () => {
  return (
    <div className={styles.container}>
      <div className={styles.firstContainer}>
        <div className={styles.left}>
          <h1>
            Transforming Ideas into <HighlightedText text="Digital" />{" "}
            Excellence
          </h1>
          <p>
            Elevate your brand with AI-powered insights, seamless API
            integration, and visionary app development. Explore how synapp’s
            tailored solutions drive innovation, enhance user engagement, and
            boost your digital growth.
          </p>
          <button className={styles.connectButton}>
            Connect now <MdOutlineArrowForward className={styles.icon} />
          </button>
        </div>

        <div className={styles.right}>
          <div className={styles.leftAssetsConatiner}>
            <div className={styles.videoContainer}>
              <video controls autoPlay loop>
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className={styles.imageContainerLeft}>
              <img src={image1} alt="Image 1" />
            </div>
          </div>
          <div className={styles.imageContainerRight}>
            <img src={image2} alt="Image 2" />
          </div>
        </div>
      </div>

      <div>
        <p className={styles.customParagraph}>
          <HighlightedText text="synapp" />{" "}
          is your partner in digital transformation, specializing in AI
          integration, API solutions, and innovative app development. Our team
          excels in creating hybrid and native applications, robust LMS
          platforms, and efficient CRM systems. With expertise in Microsoft
          Cloud and AWS DevOps, we deliver tailored solutions that elevate your
          business and drive exceptional growth.
        </p>
      </div>

      <div>
        <div className={styles.container}>
          <h1 className={styles.title}>
            Our <HighlightedText text="Core" /> Services!
          </h1>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <h2>Software & Technical Services</h2>
              <p>
                Empower your business with our comprehensive software and
                technical services. From AI integration to API solutions, app
                development, and hybrid/native applications, SYNAPP delivers
                innovation and efficiency.
              </p>
              <span className={styles.arrow}>→</span>
            </div>

            <div className={styles.serviceCard}>
              <h2>Microsoft Cloud Services</h2>
              <p>
                Leverage the power of Microsoft Cloud with Dynamics, Power BI,
                SAAS, and SharePoint. Drive your business forward with SYNAPP's
                cloud expertise and efficiency.
              </p>
              <span className={styles.arrow}>→</span>
            </div>
            <div className={styles.serviceCard}>
              <h2>Ed-tech Solutions</h2>
              <p>
                Revolutionize education with our advanced LMS (Learning
                Management System). Formerly known as Education Services, SYNAPP
                provides robust platforms for enhanced learning experiences.
              </p>
              <span className={styles.arrow}>→</span>
            </div>
            <div className={styles.serviceCard}>
              <h2>Amazon Web Services (AWS)</h2>
              <p>
                Elevate your infrastructure with AWS DevOps. Enhance
                scalability, security, and operational efficiency with SYNAPP's
                AWS solutions.
              </p>
              <span className={styles.arrow}>→</span>
            </div>
            <div className={styles.serviceCard}>
              <h2>Enterprise Solutions</h2>
              <p>
                Optimize customer interactions with our CRM (Customer
                Relationship Management) solutions. Streamline your business
                processes and boost customer satisfaction with SYNAPP.
              </p>
              <span className={styles.arrow}>→</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstHome;
