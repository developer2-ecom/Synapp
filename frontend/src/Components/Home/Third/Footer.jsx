import React from "react";
import styles from "./Footer.module.css";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoSection}>
          <h1 className={styles.logo}>synapp</h1>
          <p className={styles.description}>
            Pioneering digital transformation with cutting-edge solutions
            tailored for tomorrow. Empowering businesses to innovate, grow, and
            lead in a connected world.
          </p>
          <div className={styles.socialIcons}>
            <FaFacebookF />
            <FaLinkedin />
            <IoLogoInstagram />
          </div>
        </div>

        <div className={styles.linkSectionContainer}>
          <div className={styles.linkSection}>
            <h3 className={styles.heading}>Quick Links</h3>
            <ul>
              <li>
                <a href="#">Leadership</a>
              </li>
              <li>
                <a href="#">Our values</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
            </ul>
          </div>

          <div className={styles.helpSection}>
            <h3 className={styles.heading}>Help</h3>
            <ul>
              <li>
                <a href="#">Terms</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p>2024 SYNAPP | ALL RIGHTS RESERVED</p>
      </div>
    </footer>
  );
};

export default Footer;
