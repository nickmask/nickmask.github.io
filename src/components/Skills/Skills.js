import React from "react";

import styles from "./Skills.module.css";

function Footer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.col1}>
        <h2>SKILLS</h2>
        <p className={styles.blurb}>
          I have built my expertise over two careers, lots of meetups and
          countless podcasts.
        </p>
      </div>
      <div className={styles.col2}>
        <ul>
          <li>Website development</li>
          <li>Internationalisation and localisation</li>
          <li>Agile promoter</li>
          <li>Mobile web enthusiast</li>
          <li>Frontend development</li>
        </ul>
      </div>
      <div className={styles.col3}>
        <ul>
          <li>Full stack development</li>
          <li>Marketer, entrepreneur and customer manager</li>
          <li>Co-founder</li>
          <li>Team builder</li>
          <li>Mediocre gamer</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
