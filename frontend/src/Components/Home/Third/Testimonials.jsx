import React, { useState } from "react";
import styles from "./Testimonials.module.css";
import HighlightedText from "../../HighlightedText";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "synapp’s AI integration transformed our business processes enhancing efficiency and decision-making.",
      name: "Vikaram Desai",
      title: "Manager, Google1",
    },
    {
      quote:
        "The API solutions provided by synapp seamlessly connected our systems, boosting our operational performance.",
      name: "Vikaram Desai",
      title: "Manager, Google2",
    },
    {
      quote:
        "synapp’s app development expertise brought our vision to life with a feature-rich, user-friendly application.",
      name: "Vikaram Desai",
      title: "Manager, Google3",
    },
    {
      quote:
        "Thanks to synapp’s LMS solutions, our educational platform is now more robust and effective.",
      name: "Vikaram Desai",
      title: "Manager, Google4",
    },
    {
      quote:
        "synapp’s platform has streamlined our operations, making us more efficient and productive.",
      name: "Vikaram Desai",
      title: "Manager, Google5",
    },
    {
      quote:
        "The insights we gained from synapp's analytics tools have been invaluable for our decision-making process.",
      name: "Vikaram Desai",
      title: "Manager, Google6",
    },
    {
      quote:
        "The insights we gained from synapp's analytics tools have been invaluable for our decision-making process.",
      name: "Vikaram Desai",
      title: "Manager, Google7",
    },
    {
      quote:
        "The insights we gained from synapp's analytics tools have been invaluable for our decision-making process.",
      name: "Vikaram Desai",
      title: "Manager, Google8",
    },
    {
      quote:
        "The insights we gained from synapp's analytics tools have been invaluable for our decision-making process.",
      name: "Vikaram Desai",
      title: "Manager, Google9",
    },
    {
      quote:
        "The insights we gained from synapp's analytics tools have been invaluable for our decision-making process.",
      name: "Vikaram Desai",
      title: "Manager, Google10",
    },
    {
      quote:
        "The insights we gained from synapp's analytics tools have been invaluable for our decision-making process.",
      name: "Vikaram Desai",
      title: "Manager, Google11",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  // //   const handleNext = () => {
  // //     if (currentIndex < testimonials.length - itemsPerPage) {
  // //       setCurrentIndex((prevIndex) => prevIndex + 3);
  // //     } else {
  // //       setCurrentIndex(0);
  // //     }
  // //   };

  // //   const handlePrev = () => {
  // //     if (currentIndex > 0) {
  // //       setCurrentIndex((prevIndex) => prevIndex - 3);
  // //     } else {
  // //       setCurrentIndex(testimonials.length - itemsPerPage);
  // //     }
  // //   };

  // const handleNext = () => {
  //     // Check if the last card on the current slide is showing only partially
  //     const maxIndex = testimonials.length - itemsPerPage;
  //     if (currentIndex < maxIndex) {
  //       // Check if the last card on the slide is partially visible
  //       if (currentIndex + itemsPerPage > testimonials.length - 1) {
  //         // If partially visible, only increment by 1
  //         setCurrentIndex(testimonials.length - itemsPerPage);
  //       } else {
  //         // Otherwise, increment by 3
  //         setCurrentIndex((prevIndex) => prevIndex + itemsPerPage);
  //       }
  //     } else {
  //       // Reset to start if at the end
  //       setCurrentIndex(0);
  //     }
  //   };

  //   const handlePrev = () => {
  //     if (currentIndex > 0) {
  //       setCurrentIndex((prevIndex) => prevIndex - itemsPerPage);
  //     } else {
  //       setCurrentIndex(testimonials.length - itemsPerPage);
  //     }
  //   };

  const handleNext = () => {
    const maxIndex = testimonials.length - itemsPerPage;
    const isPartialLastCardVisible =
      currentIndex + itemsPerPage >= testimonials.length;

    if (isPartialLastCardVisible) {
      // Move to the last fully visible slide if the last card is partially visible
      setCurrentIndex(maxIndex);
    } else if (currentIndex < maxIndex) {
      // Normal sliding by 3 cards
      setCurrentIndex((prevIndex) => prevIndex + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => Math.max(prevIndex - itemsPerPage, 0));
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.headingAndbutton}>
        <h1 className={styles.title}>
          What Our <HighlightedText text="Clients" /> Say!
        </h1>
        <div className={styles.navigation}>
          <button
            className={styles.navButton}
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            {"<"}
          </button>
          <button
            className={styles.navButton}
            onClick={handleNext}
            disabled={currentIndex >= testimonials.length - itemsPerPage}
          >
            {">"}
          </button>
        </div>
      </div>
      <div className={styles.sliderWrapper}>
        <div
          className={styles.testimonialsContainer}
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.testimonialBox}>
              <div className={styles.logoContainer}>
                <img alt="Google" className={styles.googleLogo} />
                <button className={styles.viewMoreButton}>Google</button>
              </div>
              <div className={styles.quoteIcon}>“</div>
              <p className={styles.testimonialQuote}>{testimonial.quote}</p>
              <p className={styles.testimonialAuthor}>{testimonial.name}</p>
              <p className={styles.testimonialTitle}>{testimonial.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
