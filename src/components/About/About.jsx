import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/coding.png")} alt="dev" />
            <div className={styles.aboutItemText}>
              <h3>Developer</h3>
              <p>
                I'm a developer with capabilities in building responsive web apps
                and android apps
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/dev.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/content.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Content Writer</h3>
              <p>
              I have crafted engaging and informative content for websites. 
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
