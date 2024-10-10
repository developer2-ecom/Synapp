import React from 'react'
import styles from './MessageForm.module.css';
import robot from '../../../assets/Default_a_hyperrealistic_exquisitely_detailed_and_lushly_surre_0 1.png'
import HighlightedText from '../../HighlightedText';
const MessageForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <h1 className={styles.highlight}>
            Propel Your Business into the <HighlightedText text="Future"></HighlightedText> Today!
          </h1>
          <p>
            To get you in touch with the right person, we just need a few details from you first.
          </p>
          <form className={styles.form}>
            <input type="text" placeholder="Full Name" className={styles.input} />
            <input type="email" placeholder="Email" className={styles.input} />
            <input type="tel" placeholder="Phone Number" className={styles.input} />
            <textarea placeholder="Write a Message" className={styles.textarea} />
            <button type="submit" className={styles.button}>
              Connect With Us <span className={styles.arrow}>&rarr;</span>
            </button>
          </form>
        </div>
        <div className={styles.imageContainer}>
          <img
            src={robot}
            alt="AI robot"
            className={styles.image}
          />
        </div>
      </div>
    </div>
  )
}

export default MessageForm