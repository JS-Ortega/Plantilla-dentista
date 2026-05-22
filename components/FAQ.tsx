"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { STRINGS } from "../constants/strings";
import { ChevronDown } from "lucide-react";
import styles from "./FAQ.module.css";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.section}>
      <motion.h2 
        className={styles.title}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {STRINGS.faq.title}
      </motion.h2>

      <div className={styles.container}>
        {STRINGS.faq.questions.map((q, idx) => (
          <motion.div 
            key={idx}
            className={styles.item}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
          >
            <div className={styles.header} onClick={() => toggle(idx)}>
              {q.q}
              <motion.div
                animate={{ rotate: openIndex === idx ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={20} color="var(--text-gray)" />
              </motion.div>
            </div>
            <AnimatePresence>
              {openIndex === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className={styles.contentWrapper}
                >
                  <div className={styles.content}>{q.a}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
