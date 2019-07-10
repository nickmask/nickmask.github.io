import React from "react";

import styles from "./Contact.module.css";

function Contact() {
  return (
    <div className={styles.wrapper}>
      <h3>
        Say hello at{" "}
        <a className={styles.email} href="mailto:nrmaskell@gmail.com">
          nrmaskell@gmail.com
        </a>
      </h3>
    </div>
  );
}

export default Contact;
