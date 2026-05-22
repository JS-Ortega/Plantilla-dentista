"use client";

import React from "react";
import { STRINGS } from "../constants/strings";
import { Share2 } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
  const f = STRINGS.footer;

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoCol}>
          <div className={styles.logo}>{STRINGS.logo}</div>
          <p className={styles.desc}>{f.slogan}</p>
          <div className={styles.socials}>
            <div className={styles.socialIcon}><span style={{ fontSize: "0.75rem", fontWeight: "bold" }}>FB</span></div>
            <div className={styles.socialIcon}><span style={{ fontSize: "0.75rem", fontWeight: "bold" }}>IG</span></div>
            <div className={styles.socialIcon}><span style={{ fontSize: "0.75rem", fontWeight: "bold" }}>YT</span></div>
          </div>
        </div>

        <div className={styles.col}>
          <h4 className={styles.title}>{f.links.clinica.title}</h4>
          <ul className={styles.list}>
            {f.links.clinica.items.map((item, idx) => (
              <li key={idx} className={styles.link}>{item}</li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <h4 className={styles.title}>{f.links.legal.title}</h4>
          <ul className={styles.list}>
            {f.links.legal.items.map((item, idx) => (
              <li key={idx} className={styles.link}>{item}</li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <h4 className={styles.title}>{f.urgencies.title}</h4>
          <div className={styles.urgencyCard}>
            <div className={styles.urgencyTitle}>{f.urgencies.text}</div>
            <div className={styles.urgencyText}>{f.urgencies.subtext}</div>
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div>{f.copyright}</div>
        <div style={{ display: "flex", gap: "2rem" }}>
          <span>{f.madeBy}</span>
          <span>{f.tech}</span>
        </div>
      </div>
    </footer>
  );
}
