import React from "react";

import styles from "./Education.module.css";
import education from "../../data/education.json";

export const Education = () => {
  return (
    <section className={styles.container} id="education">
      <h2 className={styles.title}>Education</h2>
      <div className={styles.content}>
        <ul className={styles.education}>
          {education.map((educationItem, id) => {
            return (
              <li key={id} className={styles.educationItem}>
                <div className={styles.educationItemDetails}>
                  <div className={styles.content}>
                  <h2>{educationItem.degree}</h2>
                  <h3>{`${educationItem.startDate} - ${educationItem.endDate}`}</h3>
                  </div>
                  <h4>{educationItem.university}</h4>
                  <h5>{`${educationItem.institution}, ${educationItem.location}`}</h5>
                  <p>{`${educationItem.msystem} : ${educationItem.mark}`}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
