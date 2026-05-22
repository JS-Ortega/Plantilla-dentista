"use client";

import React, { useState, useEffect, FormEvent } from "react";
import { motion } from "framer-motion";
import { STRINGS } from "../constants/strings";
import { ChevronDown } from "lucide-react";
import styles from "./Appointment.module.css";

export default function Appointment() {
  const f = STRINGS.appointment.form;
  const [selectedTime, setSelectedTime] = useState("10:30 AM");
  const [selectedService, setSelectedService] = useState(f.serviceOptions[0]);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const times = ["10:00 AM", "10:30 AM", "12:00 PM", "04:30 PM"];

  useEffect(() => {
    const handleSelectService = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail) {
        // Encontrar una coincidencia parcial (ej. "Limpieza" coincide con "Limpieza Dental Profunda")
        const match = f.serviceOptions.find(opt => 
          customEvent.detail.toLowerCase().includes(opt.toLowerCase()) || 
          opt.toLowerCase().includes(customEvent.detail.toLowerCase())
        );
        if (match) {
          setSelectedService(match);
        }
      }
    };
    window.addEventListener("selectService", handleSelectService);
    return () => window.removeEventListener("selectService", handleSelectService);
  }, [f.serviceOptions]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    
    const formData = new FormData(e.currentTarget);
    
    try {
      const res = await fetch("https://formsubmit.co/ajax/josuecas28@gmail.com", {
        method: "POST",
        body: formData,
      });
      
      if (res.ok) {
        setStatus("success");
        
        // Extraer datos para el mensaje de WhatsApp
        const phone = formData.get("Teléfono") as string;
        const name = formData.get("Nombre") as string;
        const service = formData.get("Servicio") as string;
        const date = formData.get("Fecha") as string;
        
        if (phone) {
          // Nota técnica: Para enviar un mensaje de WhatsApp SILENCIOSO (en segundo plano sin redirigir),
          // se requiere integrar una API de backend como Twilio, Meta WhatsApp Cloud API o UltraMsg.
          // El frontend por sí solo no puede enviar mensajes a otros números por motivos de seguridad.
        }
        
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className={styles.section}>
      <motion.form 
        onSubmit={handleSubmit}
        className={styles.container}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {status === "success" ? (
          <div style={{ textAlign: "center", padding: "4rem 2rem", width: "100%", backgroundColor: "white", borderRadius: "var(--radius-xl)", boxShadow: "0 10px 25px rgba(0,0,0,0.05)" }}>
            <h3 style={{ fontSize: "1.8rem", color: "var(--primary)", marginBottom: "1rem" }}>¡Cita Solicitada con Éxito!</h3>
            <p style={{ color: "var(--text-gray)", lineHeight: 1.6, fontSize: "1.05rem", marginBottom: "2rem" }}>Hemos recibido tus datos correctamente. Nos pondremos en contacto contigo a la brevedad para confirmar tu cita.</p>
            <button 
              type="button"
              onClick={() => setStatus("idle")} 
              style={{ backgroundColor: "var(--primary)", color: "white", padding: "0.8rem 2rem", borderRadius: "2rem", border: "none", cursor: "pointer", fontWeight: 600 }}
            >
              Agendar otra cita
            </button>
          </div>
        ) : (
          <>
            {/* Campos ocultos de FormSubmit para personalización */}
            <input type="hidden" name="_subject" value="¡Nueva Cita Programada - Sonrisa Integral!" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="Hora Seleccionada" value={selectedTime} />

            <div className={styles.leftCol}>
              <h2 className={styles.title}>{STRINGS.appointment.title}</h2>
              
              <div className={styles.formGroup}>
                <label className={styles.label}>{f.service}</label>
                <div className={styles.selectWrapper}>
                  <select 
                    name="Servicio" 
                    className={styles.input} 
                    style={{appearance: "none"}} 
                    required
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                  >
                    {f.serviceOptions.map((opt, i) => <option key={i} value={opt}>{opt}</option>)}
                  </select>
                  <ChevronDown size={18} className={styles.selectIcon} />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>{f.date}</label>
                <div className={styles.selectWrapper}>
                  <input 
                    type="date" 
                    name="Fecha" 
                    className={styles.input} 
                    min={new Date().toISOString().split("T")[0]}
                    required 
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>{f.time}</label>
                <div className={styles.timeGrid}>
                  {times.map(t => (
                    <button 
                      key={t}
                      type="button"
                      className={`${styles.timeBtn} ${t === selectedTime ? styles.timeBtnActive : ''}`}
                      onClick={() => setSelectedTime(t)}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.rightCol}>
              <div className={styles.formGroup}>
                <input type="text" name="Nombre" placeholder={f.name} className={styles.input} required />
              </div>
              <div className={styles.formGroupRow}>
                <div className={styles.formGroupFlex}>
                  <input type="tel" name="Teléfono" placeholder={f.phone} className={styles.input} required />
                </div>
                <div className={styles.formGroupFlex}>
                  <input type="email" name="Email" placeholder={f.email} className={styles.input} required />
                </div>
              </div>
              <div className={styles.formGroup}>
                <textarea name="Comentarios" placeholder={f.comments} className={`${styles.input} ${styles.textarea}`} />
              </div>

              {status === "error" && (
                <div style={{ color: "#e11d48", fontSize: "0.9rem", marginBottom: "1rem" }}>
                  Hubo un error al enviar tu solicitud. Por favor intenta de nuevo.
                </div>
              )}

              <button type="submit" className={styles.submitBtn} disabled={status === "loading"}>
                {status === "loading" ? "Enviando..." : f.btnSubmit}
              </button>
            </div>
          </>
        )}
      </motion.form>
    </section>
  );
}
