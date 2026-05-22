"use client";

import React from "react";
import { motion } from "framer-motion";
import { STRINGS } from "../constants/strings";
import { Award, GraduationCap } from "lucide-react";
import styles from "./Expert.module.css";

export default function Expert() {
  return (
    <section id="about" className={styles.section}>
      <motion.div 
        className={styles.imageContainer}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        {/* El usuario prefirió esta imagen aquí */}
        <img src="/images/service_cleaning.png" alt={STRINGS.expert.name} className={styles.image} />
        <motion.div 
          className={styles.floatingBadge}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className={styles.badgeNum}>{STRINGS.expert.experience}</div>
          <div className={styles.badgeText}>{STRINGS.expert.experienceText}</div>
        </motion.div>
      </motion.div>

      <motion.div 
        className={styles.content}
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <span className={styles.tag}>{STRINGS.expert.tag}</span>
        <h2 className={styles.name}>{STRINGS.expert.name}</h2>
        <p className={styles.desc}>{STRINGS.expert.description}</p>
        
        <div className={styles.badgesContainer}>
          <div className={styles.smallBadge}>
            <GraduationCap size={18} color="var(--primary)" />
            {STRINGS.expert.badges[0]}
          </div>
          <div className={styles.smallBadge}>
            <Award size={18} color="var(--primary)" />
            {STRINGS.expert.badges[1]}
          </div>
        </div>

        <div className={styles.statsContainer}>
          {STRINGS.expert.stats.map((stat, idx) => (
            <div key={idx} className={styles.statItem}>
              <span className={styles.statNum}>{stat.number}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
