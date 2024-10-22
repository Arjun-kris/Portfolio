import React from "react";
import { ReactTyped } from "react-typed";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import content from "../../data/content.json";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.begin}>Hi, I'm</h1>
        <h1 className={styles.title}>R Arjun Krishna</h1>
        <p className={styles.description}>
          <ReactTyped
            strings={content.roles}
            typeSpeed={50}
            backSpeed={50}
            loop
          />
        </p>
        <a href="#contact" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};
