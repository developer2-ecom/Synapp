import React from 'react'
import styles from './HighlightedText.module.css';

const HighlightedText = ({text}) => {
  return (
    <strong className={styles.highlight}>
      {text}
    </strong>
  )
}

export default HighlightedText