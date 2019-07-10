import React from "react";

import styles from "./Headline.module.css";

function Headline() {
  return (
    <div className={styles.wrapper}>
      <h1>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </h1>
    </div>
  );
}

export default Headline;
