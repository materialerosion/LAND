"use client";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" as const, delay },
  };
}

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        {/* Avatar */}
        <motion.div {...fadeUp(0)}>
          <div className="hero-avatar-placeholder">🤖</div>
        </motion.div>

        {/* Name */}
        <motion.h1 className="hero-name" {...fadeUp(0.1)}>
          {personalInfo.name}
        </motion.h1>

        {/* Title */}
        <motion.p className="hero-title" {...fadeUp(0.2)}>
          {personalInfo.title}
        </motion.p>

        {/* Tagline */}
        <motion.p className="hero-tagline" {...fadeUp(0.3)}>
          {personalInfo.tagline}
        </motion.p>

        {/* CTA buttons */}
        <motion.div className="hero-actions" {...fadeUp(0.4)}>
          <a href="#apps" className="btn-primary">
            View My Apps <span aria-hidden="true">→</span>
          </a>
          <a href="#about" className="btn-ghost">
            About Me
          </a>
          <a href={`mailto:${personalInfo.email}`} className="btn-ghost">
            Get in Touch
          </a>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          style={{
            marginTop: "3.5rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.4rem",
          }}
        >
          <span
            style={{
              fontSize: "0.75rem",
              color: "var(--text-muted)",
              letterSpacing: "0.08em",
            }}
          >
            SCROLL
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            style={{ color: "var(--coral-bright)", fontSize: "1rem" }}
          >
            ↓
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
