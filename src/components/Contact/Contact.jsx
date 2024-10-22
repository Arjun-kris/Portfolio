import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:arjunkrishnar00@gmail.com">arjunkrishnar00@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon" className="contact-icon"
          />
          <a href="www.linkedin.com/in/r-arjun-krishna-a7b59b195">linkedin.com/r-arjun-krishna</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/Arjun-kris">github.com/Arjun-kris</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/whatsappIcon.png")} alt="Whatsapp icon" />
          <a href="https://wa.me/917356284142">7356284142</a>
        </li>
      </ul>
    </footer>
  );
};
