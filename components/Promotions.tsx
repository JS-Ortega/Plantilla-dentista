"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { STRINGS } from "../constants/strings";
import { X, MessageCircle } from "lucide-react";
import styles from "./Promotions.module.css";

export default function Promotions() {
  const p = STRINGS.promotions;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBook = () => {
    window.dispatchEvent(new CustomEvent("selectService", { detail: "Promociones del Mes" }));
    setIsModalOpen(false);
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={styles.section}>
      <motion.div 
        className={styles.container}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>{p.title}</h2>
        </div>

        <div className={styles.promos}>
          {[p.promo1, p.promo2, p.promo3].map((promo, idx) => (
            <div key={idx} className={styles.promoItem}>
              <span className={styles.promoTag}>{promo.tag}</span>
              <span className={styles.promoDesc}>{promo.desc}</span>
            </div>
          ))}
        </div>

        <motion.button 
          className={styles.btn}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsModalOpen(true)}
        >
          {p.btn}
        </motion.button>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div 
              className={styles.modalContent}
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className={styles.modalClose} onClick={() => setIsModalOpen(false)}>
                <X size={20} />
              </button>

              <div className={styles.modalBody}>
                <h3 className={styles.modalTitle}>{p.modal?.title}</h3>
                <p className={styles.modalDetails}>{p.modal?.details}</p>

                <div className={styles.modalButtons}>
                  <a 
                    href="https://wa.me/523334702119?text=Hola,%20me%20gustaria%20saber%20mas%20de%20la%20promocion%20dental."
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.btnWhatsapp}
                  >
                    <MessageCircle size={20} />
                    {p.modal?.btnWhatsapp}
                  </a>
                  <button className={styles.btnPrimary} onClick={handleBook}>
                    {p.modal?.btnBook}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
