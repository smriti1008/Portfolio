import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import { FiCode, FiLayers, FiCompass } from "react-icons/fi";
import smriti from "./smriti.jpeg";

const About = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.imageCol}>
          <div className={styles.imageFrame}>
            <img
              src={smriti}
              alt="Smriti"
              className={styles.profileImg}
            />
            <div className={styles.frameBorder}></div>
            <div className={styles.frameBg}></div>
          </div>
        </div>

        <div className={styles.contentCol}>
          <div className={styles.eyebrow}>My Story</div>
          <h2 className={styles.title}>
            Crafting Premium Digital <span className="text-gradient">Experiences</span>
          </h2>
          <p className={styles.description}>
            Hello! I'm Smriti, a full-stack engineer driven by a passion for building websites that look stunning and perform flawlessly. I specialize in the React ecosystem, creating interfaces that feel alive through smooth transitions and deliberate design languages.
          </p>
          <p className={styles.description}>
            My approach bridges the gap between clean, maintainable backend architectures and pixel-perfect user interfaces. I believe code is not just about solving problems, but about creating an engaging, premium user journey.
          </p>

          <div className={styles.traitsGrid}>
            <div className={styles.traitCard}>
              <div className={styles.iconWrapper}>
                <FiCode size={22} />
              </div>
              <div className={styles.traitText}>
                <h3>Clean Architecture</h3>
                <p>Writing robust, scalable, and reusable code with strict separation of concerns.</p>
              </div>
            </div>

            <div className={styles.traitCard}>
              <div className={styles.iconWrapper}>
                <FiLayers size={22} />
              </div>
              <div className={styles.traitText}>
                <h3>Modern Design System</h3>
                <p>Focusing on curated color harmonies, responsive designs, and premium aesthetics.</p>
              </div>
            </div>

            <div className={styles.traitCard}>
              <div className={styles.iconWrapper}>
                <FiCompass size={22} />
              </div>
              <div className={styles.traitText}>
                <h3>User-Centric Focus</h3>
                <p>Creating layouts and user journeys engineered specifically for engagement.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
