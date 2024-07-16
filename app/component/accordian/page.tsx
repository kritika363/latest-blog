import React from 'react';
import styles from '../accordian/accordion.module.css'

const Accordion = () => {
  return (
    <div className={styles.accordion}>
    <div className={styles.accordionItem}>
      <input type="checkbox" id="section1" className={styles.accordionCheckbox} />
      <label htmlFor="section1" className={styles.accordionHeader}>
        <h2>Section 1</h2>
      </label>
      <div className={styles.accordionBody}>
        <p>Content for section 1.</p>
      </div>
    </div>
    <div className={styles.accordionItem}>
      <input type="checkbox" id="section2" className={styles.accordionCheckbox} />
      <label htmlFor="section2" className={styles.accordionHeader}>
        <h2>Section 2</h2>
      </label>
      <div className={styles.accordionBody}>
        <p>Content for section 2.</p>
      </div>
    </div>
    <div className={styles.accordionItem}>
      <input type="checkbox" id="section3" className={styles.accordionCheckbox} />
      <label htmlFor="section3" className={styles.accordionHeader}>
        <h2>Section 3</h2>
      </label>
      <div className={styles.accordionBody}>
        <p>Content for section 3.</p>
      </div>
    </div>
  </div>
  )
}

export default Accordion