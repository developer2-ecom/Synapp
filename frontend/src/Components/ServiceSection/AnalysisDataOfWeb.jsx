import React from "react";
import styles from "./AnalysisDataOfWeb.module.css";
import HighlightedText from "../HighlightedText";

const AnalysisDataOfWeb = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        How are Clients <HighlightedText text="Applying" /> synapp’s Software &
        Technical Services
      </h1>
      <p className={styles.subtitle}>
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
  );
};

export default AnalysisDataOfWeb;
