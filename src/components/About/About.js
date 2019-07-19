import React from "react";

import styles from "./About.module.css";

function About() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.col1}>
        <h2>ABOUT ME</h2>
        <p>
          I live for technology, working with great people and building things
          that make a difference in people’s lives.
        </p>
        <p>
          Over two careers, 29 years on Earth and many international adventures,
          I have learnt a lot. In my first career I worked in marketing and
          customer management for one of the largest companies in the world.
          There I honed my interpersonal skills, learnt what it meant to listen
          to customers, and was given a crash course in financial literacy - all
          while co-founding a start-up on the side. After four years I realised
          my true passion lay in technology and that’s what I wanted to work
          with everyday.
        </p>
        <p>
          Cue an intense software bootcamp, lots of personal development and a
          side gig as an Uber driver. I leapt into the deep end when I joined a
          start-up accelerator at Te Papa, New Zealand’s national museum,
          working on a mobile web platform for museums. I learnt what it means
          to be LEAN, be Agile and work fast!
        </p>
      </div>
      <div className={styles.col2}>
        <p>
          After my foray into start-ups, I got my dream job at one of New
          Zealand’s largest tech companies, Xero. There I refined my skills and
          was given the opportunity to work on a multi-million user application
          in an area I love: frontend development. Our team of five was voted
          Xero’s best team of 2018 (out of 650 people), had a major impact on
          our surrounding teams by promoting Agile, pushed for the building of
          generic components to speed up development and gave direction to the
          Board on how to modernise and internationalise Xero’s legacy codebase.
          This kicked off one of the largest projects since Xero's AWS
          migration.
        </p>
        <p>
          That brings me to now. I am an experienced software developer who has
          just relocated to London, looking for a company that shares my values
          and drive to create great products. If you are wanting a developer
          with an interesting background, a wide skill base and who truly loves
          what they do, get in touch. I’d love to talk.
        </p>
      </div>
    </div>
  );
}

export default About;
