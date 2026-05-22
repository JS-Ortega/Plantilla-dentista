"use client";

import React from "react";
import { motion } from "framer-motion";
import { STRINGS } from "../constants/strings";
import { CheckCircle2, MessageCircle } from "lucide-react";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="home" className={styles.section}>
      <img src="/images/hero_bg.png" alt="Clínica" className={styles.bgImage} />
      <div className={styles.gradientOverlay}></div>

      <motion.div
        className={styles.content}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className={styles.title}>{STRINGS.hero.title}</h1>
        <p className={styles.subtitle}>{STRINGS.hero.subtitle}</p>

        <div className={styles.buttons}>
          <button 
            className={styles.primaryBtn}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {STRINGS.btnBook}
          </button>
          <a
            href="https://wa.me/523334702119?text=Hola%20buen%20dia,%20me%20interesa%20mas%20informacion%20sobre%20la%20web"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondaryBtn}
            style={{ textDecoration: 'none' }}
          >
            <MessageCircle size={20} color="#25D366" />
            {STRINGS.hero.btnWhatsapp}
          </a>
        </div>

        <div className={styles.features}>
          {STRINGS.hero.features.map((feature, idx) => (
            <motion.div
              key={idx}
              className={styles.featureItem}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + (idx * 0.1) }}
            >
              <CheckCircle2 className={styles.icon} />
              {feature}
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.a
        href="https://wa.me/523334702119?text=Hola%20buen%20dia,%20me%20interesa%20mas%20informacion%20sobre%20la%20web."
        target="_blank"
        rel="noopener noreferrer"
        className={styles.floatingWhatsapp}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle size={32} />
      </motion.a>
    </section>
  );
}
