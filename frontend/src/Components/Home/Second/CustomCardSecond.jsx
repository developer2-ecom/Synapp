import React from "react";
import styles from "./CustomCardSecond.module.css";

const CustomCardSecond = () => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.leftpart}>
        <div className={styles.imageWrapper}></div>
        <div className={styles.textWrapper}>
          <h1 className={styles.title}>
            Tailored <br /> Digital Solutions
          </h1>
          <p className={styles.description}>
            We believe in the power of tailored solutions. SYNAPP crafts bespoke
            services in LMS, CRM, hybrid, and native applications, designed to
            perfectly align with your business goals and challenges.
          </p>
        </div>
      </div>
      <div className={styles.number}>02</div>
    </div>
  );
};

export default CustomCardSecond;
