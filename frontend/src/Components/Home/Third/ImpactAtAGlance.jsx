import React from "react";
import styles from "./ImpactAtAGlance.module.css"; // Import your CSS module
import HighlightedText from "../../HighlightedText";

const ImpactAtAGlance = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Our <HighlightedText text="Impact" />{" "}at a Glance
      </h1>
      <p className={styles.subtitle}>
        See how SYNAPP’s software and technical services drive real business results.
      </p>
      <div className={styles.statsContainer}>
        <div className={styles.statBox}>
          <h2 className={styles.statValue}>7+</h2>
          <p className={styles.statDescription}>Years of Industry Experience</p>
        </div>
        <div className={styles.verticalLine}></div>
        <div className={styles.statBox}>
          <h2 className={styles.statValue}>50+</h2>
          <p className={styles.statDescription}>Certified Experts in Team</p>
        </div>
        <div className={styles.verticalLine}></div>
        <div className={styles.statBox}>
          <h2 className={styles.statValue}>100+</h2>
          <p className={styles.statDescription}>Projects Delivered</p>
        </div>
        <div className={styles.verticalLine}></div>
        <div className={styles.statBox}>
          <h2 className={styles.statValue}>10+</h2>
          <p className={styles.statDescription}>Industry Niches Catered</p>
        </div>
      </div>
    </div>
  );
};

export default ImpactAtAGlance;
