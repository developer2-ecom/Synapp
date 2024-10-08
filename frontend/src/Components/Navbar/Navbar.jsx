import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { SlArrowDown } from "react-icons/sl";
import { MdOutlineArrowOutward } from "react-icons/md";
import Services from "./Services";

const Navbar = () => {
  const [showServices, setShowServices] = useState(false);
  const toggleServices = () => {
    setShowServices(!showServices);
  };

  return (
    <div>
      <nav className={styles.navbar}>
        <div className={styles.logo}>LOGO</div>
        <div className={styles.navLinks}>
          <div className={styles.dropdown} onClick={toggleServices}>
            <button className={styles.navButton}>
              <p>Services</p>{" "}
              <SlArrowDown style={{ cursor: "pointer" }} />
            </button>
          </div>
          <h3 className={styles.navLink}>Who we are</h3>
          <h3 className={styles.navLink}>Contact us</h3>
        </div>
        <div>
          <button className={styles.appointmentButton}>
            <span>Book an appointment</span>
            <MdOutlineArrowOutward className={styles.icon} />
          </button>
        </div>
      </nav>
      {showServices && (
        <div className={styles.dropdownMenu}>
          <Services />
        </div>
      )}
    </div>
  );
};

export default Navbar;
