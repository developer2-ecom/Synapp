// import React from "react";
// import styles from "./HomeMiddle.module.css";
// import HighlightedText from "../Components/HighlightedText";
// import CustomCardFirst from "../Components/Home/Second/CustomCardFirst";
// import CustomCardSecond from "../Components/Home/Second/CustomCardSecond";
// import CustomCardThird from "../Components/Home/Second/CustomCardThird";

// const HomeMiddle = () => {
//   return (
//     <div>
//       <p className={styles.smallPara}>
//         Why Choose <HighlightedText text="Synapp?"></HighlightedText>
//       </p>
//       <CustomCardFirst></CustomCardFirst>
//       <CustomCardSecond></CustomCardSecond>
//       <CustomCardThird></CustomCardThird>
//     </div>
//   );
// };

// export default HomeMiddle;




import React, { useState, useEffect } from "react";
import styles from "./HomeMiddle.module.css";
import HighlightedText from "../Components/HighlightedText";
import CustomCardFirst from "../Components/Home/Second/CustomCardFirst";
import CustomCardSecond from "../Components/Home/Second/CustomCardSecond";
import CustomCardThird from "../Components/Home/Second/CustomCardThird";

const HomeMiddle = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Handle down arrow key press to slide
  const handleKeyDown = (event) => {
    if (event.key === "ArrowDown") {
      setCurrentSlide((prevSlide) =>
        prevSlide === 2 ? 0 : prevSlide + 1 // Cycle through slides
      );
    }
  };

  // Listen for keydown event
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div>
      <p className={styles.smallPara}>
        Why Choose <HighlightedText text="Synapp?"></HighlightedText>
      </p>
      <div className={styles.container}>
        <div
          className={styles.cards}
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          <div className={styles.card}>
            <CustomCardFirst />
          </div>
          <div className={styles.card}>
            <CustomCardSecond />
          </div>
          <div className={styles.card}>
            <CustomCardThird />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMiddle;
