import React from "react";

import styles from "./Skills.module.css";

function Footer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.col1}>
        <h2>Skills</h2>
        <p>A lil something something</p>
      </div>
      <div className={styles.col2}>
        <ul>
          <li>Website Design & Development</li>
          <li>Website Design & Development</li>
          <li>Website Design & Development</li>
          <li>Website Design & Development</li>
          <li>Website Design & Development</li>
        </ul>
      </div>
      <div className={styles.col3}>
        <ul>
          <li>Website Design & Development</li>
          <li>Website Design & Development</li>
          <li>Website Design & Development</li>
          <li>Website Design & Development</li>
          <li>Website Design & Development</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
