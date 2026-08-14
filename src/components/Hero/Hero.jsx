import React from "react";
import styles from "./Hero.module.css";
import { TypeAnimation } from "react-type-animation";
import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Hero = () => {
  return (
    <section id="home" className={styles.heroSection}>
      {/* Dynamic Background Elements */}
      <div className={styles.glowingBlob1}></div>
      <div className={styles.glowingBlob2}></div>
      
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.greeting}>Welcome to my space</div>
          <h1 className={styles.title}>
            Hi, I'm <span className="text-gradient">Smriti</span>
          </h1>
          
          <h2 className={styles.typingWrapper}>
            I am a{" "}
            <span className={styles.typeAnimation}>
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  1500,
                  "UI/UX Designer",
                  1500,
                  "Creative Thinker",
                  1500,
                  "Problem Solver",
                  1500,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
              />
            </span>
          </h2>

          <p className={styles.description}>
            I design and build premium web applications, combining clean architectural code with immersive, dynamic interface experiences. Let's create something extraordinary.
          </p>

          <div className={styles.ctaRow}>
            <a href="#projects" className={styles.ctaPrimary}>
              Explore Projects <FiArrowRight className={styles.arrowIcon} />
            </a>
            <a href="#contact" className={styles.ctaSecondary}>
              Get in Touch
            </a>
          </div>

          <div className={styles.socialRow}>
            <a href="https://github.com/smriti1008" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FiGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/smriti-singh040705/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FiLinkedin size={20} />
            </a>
            <a href="mailto:smritisingh9118@gmail.com" aria-label="Email">
              <FiMail size={20} />
            </a>
          </div>
        </div>

        {/* Hero Interactive Visual - Pure CSS 3D Floating Geometry */}
        <div className={styles.visualContainer}>
          <div className={styles.sphereWrapper}>
            <div className={styles.sphere}>
              <div className={styles.sphereInner}></div>
            </div>
            <div className={styles.ring1}></div>
            <div className={styles.ring2}></div>
            <div className={styles.ring3}></div>
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <div className={styles.mouse}>
          <div className={styles.wheel}></div>
        </div>
        <div className={styles.arrows}>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  );
};

export default Hero;