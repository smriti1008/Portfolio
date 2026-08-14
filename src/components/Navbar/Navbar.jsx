import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";

const Navbar = ({ theme, toggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""} ${theme === "light" ? styles.light : ""}`}>
      <div className={styles.navContainer}>
        <a className={styles.logo} href="#home">
          Smriti<span>.</span>
        </a>

        {/* Desktop Menu */}
        <div className={styles.desktopNav}>
          <ul className={styles.navLinks}>
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className={styles.link}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={toggleTheme}
            className={styles.themeToggle}
            aria-label="Toggle Theme"
          >
            {theme === "light" ? <FiMoon size={20} /> : <FiSun size={20} />}
          </button>
        </div>

        {/* Mobile Nav Right side */}
        <div className={styles.mobileNavRight}>
          <button
            onClick={toggleTheme}
            className={styles.themeToggleMobile}
            aria-label="Toggle Theme"
          >
            {theme === "light" ? <FiMoon size={18} /> : <FiSun size={18} />}
          </button>

          <button
            className={`${styles.menuBtn} ${menuOpen ? styles.open : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`${styles.mobileDrawer} ${menuOpen ? styles.menuOpen : ""}`}>
        <ul className={styles.mobileLinks} onClick={() => setMenuOpen(false)}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
