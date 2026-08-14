import React from "react";
import styles from "./Footer.module.css";
import { FiArrowUp } from "react-icons/fi";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <a href="#home" className={styles.logo}>
            Smriti<span>.</span>
          </a>
          <p className={styles.tagline}>Building pixel-perfect digital experiences.</p>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.bottomRow}>
          <p className={styles.copy}>
            &copy; {new Date().getFullYear()} Smriti. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className={styles.backToTop}
            aria-label="Back to top"
          >
            Back to Top <FiArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
