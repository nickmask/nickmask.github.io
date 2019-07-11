import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.wrapper}>
      <hr className={styles.separator} />
      <div className={styles.linkWrapper}>
        <div className={styles.socialWrapper}>
          <a
            href="https://www.linkedin.com/in/nickmask"
            title="LinkedIn @nickmask"
            className={styles.linkedinLogo}
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://www.github.com/nickmask"
            title="Github @nickmask"
            className={styles.githubLogo}
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <span className={styles.copywrite}>
            {" "}
            © 2019 Nick Maskell. Made in London.
          </span>
        </div>
        <div className={styles.nickmaskWrapper}>
          <span className={styles.nickmask}>NICKMASK</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
