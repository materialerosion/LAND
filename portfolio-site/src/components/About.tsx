"use client";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";

const skills = [
  { icon: "🧠", label: "AI / LLM Engineering" },
  { icon: "⚗️", label: "Formula Research Tools" },
  { icon: "🏥", label: "Clinical Research Apps" },
  { icon: "🧪", label: "Synthetic Personas" },
  { icon: "💡", label: "Innovation Assistants" },
  { icon: "⚡", label: "Next.js & React" },
  { icon: "🔗", label: "API Design & Integration" },
  { icon: "🎨", label: "Product & UX Design" },
];

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title">
          <span className="section-accent">⟩</span> About Me
        </h2>

        <div className="about-grid">
          {/* Left — bio text */}
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p>{personalInfo.description}</p>
            <p>
              My experience with living the problems allows me to build and ship in rapid cycles.
              I work at the intersection of AI research and product development —
              taking messy domain expertise (formulas, clinical data, user psychology,
              innovation frameworks) and wrapping it in intuitive interfaces that feel effortless.
            </p>
            <p>
              Every app I ship starts with a real workflow problem and ends with a
              tool people actually use. No fake AI demos. No vaporware.
            </p>

            <div style={{ marginTop: "1.5rem", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <a href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ fontSize: "0.82rem" }}>
                GitHub →
              </a>
              <a href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ fontSize: "0.82rem" }}>
                LinkedIn →
              </a>
            </div>
          </motion.div>

          {/* Right — skills */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                marginBottom: "1rem",
              }}
            >
              Skills &amp; Domains
            </p>
            <div className="skills-grid">
              {skills.map((skill) => (
                <div className="skill-pill" key={skill.label}>
                  <span>{skill.icon}</span>
                  <span>{skill.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
