// import React from "react";
// import styles from "./Card.module.css";

// const Card = ({ cardData }) => {
//   return (
//     <div className={styles.container}>
//       <div className={styles.textSection}>
//         <h1 className={styles.heading}>{cardData.title}</h1>
//         <p className={styles.description}>{cardData.description}</p>
//         <p className={styles.descriptionBottom}>{cardData.bottomDescription}</p>
//         <a href={cardData.link} className={styles.link}>
//          {cardData.link}
//         </a>
//       </div>
//       <div className={styles.mediaPlaceholder}></div>
//     </div>
//   );
// };



// export default Card;




// import React from "react";
// import styles from "./Card.module.css";

// const Card = ({ cardData, direction }) => {
//   return (
//     <div
//       className={`${styles.container} ${
//         direction === "forward" ? styles.slideInFromRight : styles.slideInFromLeft
//       }`}
//     >
//       <div className={styles.textSection}>
//         <h1 className={styles.heading}>{cardData.title}</h1>
//         <p className={styles.description}>{cardData.description}</p>
//         <p className={styles.descriptionBottom}>{cardData.bottomDescription}</p>
//         <a href={cardData.link} className={styles.link}>
//           {cardData.link}
//         </a>
//       </div>
//       <div className={styles.mediaPlaceholder}></div>
//     </div>
//   );
// };

// export default Card;



import React from "react";
import styles from "./Card.module.css";

const Card = ({ cardData, direction, isVisible }) => {
  return (
    <div
      className={`${styles.container} ${!isVisible ? styles.hidden : ""} ${
        direction === "forward" ? styles.slideInFromRight : styles.slideInFromLeft
      }`}
    >
      <div className={styles.textSection}>
        <h1 className={styles.heading}>{cardData.title}</h1>
        <p className={styles.description}>{cardData.description}</p>
        <p className={styles.descriptionBottom}>{cardData.bottomDescription}</p>
        <a href={cardData.link} className={styles.link}>
          {cardData.link}
        </a>
      </div>
      <div className={styles.mediaPlaceholder}></div>
    </div>
  );
};

export default Card;

