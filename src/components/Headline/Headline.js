import React from "react";

import styles from "./Headline.module.css";

function Headline() {
  return (
    <div className={styles.wrapper}>
      <h1>
        I’m Nick. <br />
        An overally positive traveler, foodie and geek. <br />
        I’m also a software developer.
      </h1>
    </div>
  );
}

export default Headline;
