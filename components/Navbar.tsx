"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { STRINGS } from "../constants/strings";
import { Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.logo}>{STRINGS.logo}</div>
      
      <div className={styles.menuToggle} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </div>

      <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
        <span className={styles.navLink} onClick={() => scrollToSection("home")}>{STRINGS.nav.home}</span>
        <span className={styles.navLink} onClick={() => scrollToSection("services")}>{STRINGS.nav.services}</span>
        <span className={styles.navLink} onClick={() => scrollToSection("about")}>{STRINGS.nav.about}</span>
        <span className={styles.navLink} onClick={() => scrollToSection("testimonials")}>{STRINGS.nav.testimonials}</span>
        <span className={styles.navLink} onClick={() => scrollToSection("contact")}>{STRINGS.nav.contact}</span>
        
        {/* En móvil mostraremos el botón en el menú también */}
        {menuOpen && (
          <button className={styles.btn} style={{ display: 'block', marginTop: '1rem' }} onClick={() => scrollToSection("contact")}>
            {STRINGS.btnBook}
          </button>
        )}
      </nav>

      <button className={styles.btn} onClick={() => scrollToSection("contact")}>
        {STRINGS.btnBook}
      </button>
    </motion.header>
  );
}
