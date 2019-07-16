import React from "react";
import styles from "./ListSection.module.css";

export default function ListSection({ title, blurb, list }) {
  const listLeft = list.slice(0, Math.ceil(list.length / 2));
  const listRight = list.slice(Math.ceil(list.length / 2) + 1, list.length);

  return (
    <div className={styles.wrapper}>
      <div className={styles.col1}>
        <h2>{title}</h2>
        <p className={styles.blurb}>{blurb}</p>
      </div>
      <div className={styles.col2}>
        <ul>
          {listLeft.map(item => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
      <div className={styles.col3}>
        <ul>
          {listRight.map(item => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
