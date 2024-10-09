import React from "react";
import styles from "./CustomCardThird.module.css";

const CustomCardThird = () => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.leftpart}>
        <div className={styles.imageWrapper}></div>
        <div className={styles.textWrapper}>
          <h1 className={styles.title}>
            Track Record of   <br /> Excellence
          </h1>
          <p className={styles.description}>
            With a track record of successful projects and satisfied clients,
            SYNAPP i your trusted! partner in digital transformation, Experience
            the difference with our commitment to quality and results-crien
            solutions.
          </p>
        </div>
      </div>
      <div className={styles.number}>03</div>
    </div>
  );
};

export default CustomCardThird;
