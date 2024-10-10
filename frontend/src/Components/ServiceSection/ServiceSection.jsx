import React from 'react';
import styles from './ServiceSection.module.css';
import serviceImage from "../../assets/thisisengineering-6DSItOWspGY-unsplash 1.png";
import HighlightedText from '../HighlightedText';
import { MdOutlineArrowOutward } from "react-icons/md";


const ServiceSection = () => {
  return (
    <div className={styles.container}>
    
      <section className={styles.introSection}>
        <div className={styles.textSection}>
          <h1 className={styles.title}>
            Lead with <HighlightedText text="Innovation"></HighlightedText>
          </h1>
          <p className={styles.subtitle}>
            Achieve superior performance with AI integration, optimized APIs, and pioneering app development for hybrid and native applications.
          </p>
          <button className={styles.appointmentButton}>
            <span>Book an appointment</span>
            <MdOutlineArrowOutward className={styles.icon} />
          </button>
        </div>
        <div className={styles.imageContainer}>
          <img src={serviceImage} alt="Team working on technology" className={styles.image} />
        </div>
      </section>

     
      <section className={styles.serviceSection}>
        <h2 className={styles.serviceTitle}>
          <HighlightedText text="Explore"></HighlightedText> synapp’s Software & Technical Services
        </h2>
        <p className={styles.serviceDescription}>
          synapp's software and technical services empower your business to achieve digital excellence. Our offerings include AI integration, delivering intelligent automation and insights; robust API solutions, ensuring seamless connectivity across your systems; innovative app development, creating user-friendly and feature-rich applications; and hybrid and native applications, offering optimal performance and flexibility. Trust synapp to transform your digital landscape with cutting-edge technology and customized solutions designed to meet your unique business needs.
        </p>
      </section>


      
    </div>
  );
};

export default ServiceSection;
