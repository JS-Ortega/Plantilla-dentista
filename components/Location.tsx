"use client";

import React from "react";
import { motion } from "framer-motion";
import { STRINGS } from "../constants/strings";
import { MapPin, Phone, Clock, CreditCard } from "lucide-react";
import styles from "./Location.module.css";

export default function Location() {
  const loc = STRINGS.location;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div 
          className={styles.leftCol}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>{loc.title}</h2>
          
          <div className={styles.infoList}>
            <div className={styles.infoItem}>
              <div className={styles.iconContainer}><MapPin size={20} /></div>
              <div>
                <div className={styles.infoTitle}>{loc.address.label}</div>
                <div className={styles.infoText}>{loc.address.value}</div>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.iconContainer}><Phone size={20} /></div>
              <div>
                <div className={styles.infoTitle}>{loc.phone.label}</div>
                <div className={styles.infoText}>{loc.phone.value}</div>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.iconContainer}><Clock size={20} /></div>
              <div>
                <div className={styles.infoTitle}>{loc.hours.label}</div>
                <div className={styles.infoText}>{loc.hours.days}<br/>{loc.hours.weekend}</div>
              </div>
            </div>
          </div>

          <div className={styles.paymentMethods}>
            <div className={styles.paymentTitle}>{loc.paymentMethods}</div>
            <div className={styles.iconsRow}>
              <CreditCard size={24} />
              <div style={{ width: "24px", height: "24px", borderRadius: "4px", backgroundColor: "var(--text-light)" }}></div>
              <div style={{ width: "24px", height: "24px", borderRadius: "12px", backgroundColor: "var(--text-light)" }}></div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className={styles.rightCol}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img src="/images/map_placeholder.png" alt="Mapa" className={styles.mapImage} />
        </motion.div>
      </div>
    </section>
  );
}
