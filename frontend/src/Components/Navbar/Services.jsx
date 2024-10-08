import React from 'react';
import styles from './Services.module.css';

const Services = () => {
  return (
    <div className={styles.servicesSection}>
      <h1 className={styles.heading}>Our Services</h1>
      <div className={styles.servicesGrid}>
        {/* Column 1 */}
        <div className={styles.serviceColumn}>
          <h3 className={styles.serviceTitle}>Software and Technical Services</h3>
          <ul className={styles.serviceList}>
            <li>AI Integration</li>
            <li>API</li>
            <li>App Development</li>
            <li>Hybrid and Native Applications</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className={styles.serviceColumn}>
          <h3 className={styles.serviceTitle}>Microsoft Cloud Services</h3>
          <ul className={styles.serviceList}>
            <li>Microsoft Dynamics</li>
            <li>Power BI</li>
            <li>SaaS</li>
            <li>Share Point</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className={styles.serviceColumn}>
          <h3 className={styles.serviceTitle}>Ed-tech Solutions</h3>
          <ul className={styles.serviceList}>
            <li>Learning Management System (LMS)</li>
          </ul>
          <h3 className={styles.serviceTitle}>Enterprise Solutions</h3>
          <ul className={styles.serviceList}>
            <li>Customer Relationship Management (CRM)</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className={styles.serviceColumn}>
          <h3 className={styles.serviceTitle}>Amazon Web Services</h3>
          <ul className={styles.serviceList}>
            <li>AWS DevOps</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
