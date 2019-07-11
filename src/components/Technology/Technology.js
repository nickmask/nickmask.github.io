import React from "react";

import styles from "./Technology.module.css";

function Technology() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.col1}>
        <h2>TECHNOLOGIES</h2>
        <p className={styles.blurb}>
          I have worked with many technologies and am always ready to learn and
          use more.
        </p>
      </div>
      <div className={styles.col2}>
        <ul>
          <li>Javascript / Typescript / Node.js</li>
          <li>React</li>
          <li>Redux</li>
          <li>Webpack</li>
          <li>HTML5</li>
          <li>CSS / SCSS / Sass</li>
          <li>C# / .NET Core</li>
          <li>SQL</li>
        </ul>
      </div>
      <div className={styles.col3}>
        <ul>
          <li>GraphQL</li>
          <li>AWS</li>
          <li>Docker</li>
          <li>Jenkins</li>
          <li>Git</li>
          <li>TeamCity</li>
          <li>Jest / Enzyme</li>
        </ul>
      </div>
    </div>
  );
}

export default Technology;
