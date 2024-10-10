import React, { useState } from "react";
import cardData from "../ServiceSection/cardData";
import styles from "./AIIntegration.module.css";
import Card from "./Card";

const AIIntegration = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);
  const [direction, setDirection] = useState("forward");
  const [isCardVisible, setIsCardVisible] = useState(true);

  const handleNavbarClick = (index) => {
    if (index !== selectedCardIndex) {
      // Set direction based on forward or backward movement
      if (index > selectedCardIndex) {
        setDirection("forward");
      } else {
        setDirection("backward");
      }

      // Hide the card before showing the new one for a smooth transition
      setIsCardVisible(false);

      // Wait for the exit transition to finish before switching content
      setTimeout(() => {
        setSelectedCardIndex(index);
        setIsCardVisible(true); // Show the new card after the transition
      }, 300); // Match this timeout with the CSS transition duration
    }
  };

  return (
    <div className={styles.parentContainer}>
      <nav className={styles.navbar}>
        <span
          className={`${styles.navbarItem} ${
            selectedCardIndex === 0 ? styles.active : ""
          }`}
          onClick={() => handleNavbarClick(0)}
        >
          AI Integration
        </span>
        <span
          className={`${styles.navbarItem} ${
            selectedCardIndex === 1 ? styles.active : ""
          }`}
          onClick={() => handleNavbarClick(1)}
        >
          API Solutions
        </span>
        <span
          className={`${styles.navbarItem} ${
            selectedCardIndex === 2 ? styles.active : ""
          }`}
          onClick={() => handleNavbarClick(2)}
        >
          App Development
        </span>
        <span
          className={`${styles.navbarItem} ${
            selectedCardIndex === 3 ? styles.active : ""
          }`}
          onClick={() => handleNavbarClick(3)}
        >
          Hybrid and Native Applications
        </span>
      </nav>
      {/* Conditionally render the card based on visibility */}
      {isCardVisible && (
        <Card cardData={cardData[selectedCardIndex]} direction={direction} />
      )}
    </div>
  );
};

export default AIIntegration;
