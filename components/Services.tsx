"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { STRINGS } from "../constants/strings";
import { ArrowRight, X, Clock, Tag } from "lucide-react";
import styles from "./Services.module.css";

export default function Services() {
  const s = STRINGS.services.list;
  const [selectedService, setSelectedService] = useState<any>(null);

  const handleBook = () => {
    // Dispacha un evento global para que Appointment.tsx lo escuche y seleccione el servicio
    if (selectedService) {
      window.dispatchEvent(new CustomEvent("selectService", { detail: selectedService.title }));
    }
    setSelectedService(null);
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className={styles.section}>
      <motion.span
        className={styles.tag}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {STRINGS.services.tag}
      </motion.span>
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        {STRINGS.services.title}
      </motion.h2>

      <div className={styles.grid}>
        {/* Large Card: Limpieza */}
        <motion.div
          className={styles.cardLarge}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          onClick={() => setSelectedService(s[0])}
          style={{ cursor: "pointer" }}
        >
          <img src="/images/dentist.png" alt={s[0].title} className={styles.bgImageLarge} />
          <div className={styles.overlayLarge}></div>
          <h3 className={styles.cardTitleLight}>{s[0].title}</h3>
          <p className={styles.cardDescLight}>{s[0].description}</p>
          <div>
            <span className={styles.priceTag}>{s[0].price} | {s[0].duration}</span>
          </div>
          <div className={styles.circleBtn}><ArrowRight size={20} /></div>
        </motion.div>

        {/* Small Card: Blanqueamiento */}
        <motion.div
          className={`${styles.cardStandard} ${styles.cardSmallGrid}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ transform: "translateY(-5px)", boxShadow: "0 10px 25px -5px rgba(0,0,0,0.05)" }}
          onClick={() => setSelectedService(s[1])}
          style={{ cursor: "pointer" }}
        >
          <div>
            <img src="/images/service_whitening.png" alt={s[1].title} className={styles.cardImgTop} />
            <h3 className={styles.cardTitle}>{s[1].title}</h3>
            <p className={styles.cardDesc}>{s[1].description}</p>
          </div>
          <div>
            <p className={styles.priceSmall}>{s[1].price} {STRINGS.currency}</p>
            <div className={styles.linkBtn}>{STRINGS.services.moreInfo} <ArrowRight size={16} /></div>
          </div>
        </motion.div>

        {/* Standard Cards below */}
        {s.slice(2).map((service, idx) => (
          <motion.div
            key={service.id}
            className={styles.cardStandard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 + (idx * 0.1) }}
            whileHover={{ transform: "translateY(-5px)", boxShadow: "0 10px 25px -5px rgba(0,0,0,0.05)" }}
            onClick={() => setSelectedService(service)}
            style={{ cursor: "pointer" }}
          >
            <div>
              {service.tag && <div className={styles.tagLabel}>{service.tag}</div>}
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.description}</p>
            </div>
            <div>
              <p className={styles.priceSmall}>Desde {service.priceDesde} {STRINGS.currency} {service.unit || ""}</p>
              <div className={styles.linkBtn}>{STRINGS.services.moreInfo} <ArrowRight size={16} /></div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              className={styles.modalContent}
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className={styles.modalClose} onClick={() => setSelectedService(null)}>
                <X size={20} />
              </button>

              {selectedService.image && (
                <img src={selectedService.image} alt={selectedService.title} className={styles.modalImage} />
              )}

              <div className={styles.modalBody}>
                <h3 className={styles.modalTitle}>{selectedService.title}</h3>

                <div className={styles.modalMeta}>
                  <div className={styles.modalMetaItem}>
                    <Tag size={18} className={styles.modalMetaIcon} />
                    <span>{selectedService.price || selectedService.priceDesde} {STRINGS.currency}</span>
                  </div>
                  {selectedService.duration && (
                    <div className={styles.modalMetaItem}>
                      <Clock size={18} className={styles.modalMetaIcon} />
                      <span>{selectedService.duration}</span>
                    </div>
                  )}
                </div>

                <p className={styles.modalDetails}>{selectedService.details}</p>

                <button className={styles.modalBtn} onClick={handleBook}>
                  Agendar cita
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
