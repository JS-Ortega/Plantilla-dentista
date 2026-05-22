"use client";

import React from "react";
import { motion } from "framer-motion";
import { STRINGS } from "../constants/strings";
import { Star } from "lucide-react";
import styles from "./Testimonials.module.css";

const getAvatarClass = (index: number) => {
  if (index === 0) return styles.avatarIndex0;
  if (index === 1) return styles.avatarIndex1;
  return styles.avatarIndex2;
};

export default function Testimonials() {
  return (
    <section id="testimonials" className={styles.section}>
      <motion.h2 
        className={styles.title}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {STRINGS.testimonials.title}
      </motion.h2>

      <div className={styles.grid}>
        {STRINGS.testimonials.reviews.map((review, idx) => (
          <motion.div 
            key={review.id}
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <div>
              <div className={styles.stars}>
                {[1, 2, 3, 4, 5].map(star => <Star key={star} size={18} fill="currentColor" />)}
              </div>
              <p className={styles.quote}>"{review.quote}"</p>
            </div>
            <div className={styles.user}>
              <div className={`${styles.avatar} ${getAvatarClass(idx)}`}>
                {review.name.split(" ").map(n => n[0]).join("")}
              </div>
              <div>
                <div className={styles.name}>{review.name}</div>
                <div className={styles.type}>{review.type}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
