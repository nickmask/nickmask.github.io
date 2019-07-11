import React from "react";

import styles from "./WordsToLiveBy.module.css";

function WordsToLiveBy() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.col1}>
        <h2>WORDS I LIVE BY</h2>
        <p>
          Have strong ideas, loosely held. Fight for what you think is right,
          but always be open to being wrong.
        </p>
        <p>
          Know when to cut corners and when not to. Not everything needs to be
          built perfectly, but some things do.
        </p>
        <p>
          Always be on the look out for problems that multiply themselves.
          Investing your time in fixing an issue for ten teams is time spent
          well.
        </p>
      </div>
      <div className={styles.col2}>
        <p>
          "You don’t hire star developers, put them together, and poof get a
          great team. It’s the other way around. When developers form a great
          team, the team makes us into great developers."{" "}
          <a href="https://the-composition.com/the-origins-of-opera-and-the-future-of-programming-bcdaf8fbe960">
            Jessica Kerr
          </a>
        </p>
        <p>
          A team is more than the sum of its parts, it is also its
          interrelationships.
        </p>
        <p>
          <u>Always</u> talk to your customers.
        </p>
      </div>
    </div>
  );
}

export default WordsToLiveBy;
