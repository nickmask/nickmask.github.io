import React from "react";
import styles from "./ListSection.module.css";

export default function ListSection({ title, blurb, list }) {
  const listMidpoint = Math.ceil(list.length / 2);

  const listLeft = list.slice(0, listMidpoint);
  const listRight = list.slice(listMidpoint);

  return (
    <div className={styles.wrapper}>
      <div className={styles.col1}>
        <h2>{title}</h2>
        <p className={styles.blurb}>{blurb}</p>
      </div>
      <div className={styles.col2}>
        <ul>
          {listLeft.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
      <div className={styles.col3}>
        <ul>
          {listRight.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
