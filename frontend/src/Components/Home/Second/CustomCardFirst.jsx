import React from "react";
import styles from "./CustomCardFirst.module.css";

const CustomCardFirst = () => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.leftpart}>
        <div className={styles.imageWrapper}></div>
        <div className={styles.textWrapper}>
          <h1 className={styles.title}>
            Industry-Leading   <br /> Expertise
          </h1>
          <p className={styles.description}>
            Empower your business with our comprehensive software and technical
            services. From AI integration to API solutions, app development, and
            hybrid/native applications, SYNAPP delivers innovation and
            efficiency. 
          </p>
        </div>
      </div>
      <div className={styles.number}>01</div>
    </div>
  );
};

export default CustomCardFirst;
