"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { personalInfo, rotatingSubtitles } from "@/data/portfolio";

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" as const, delay },
  };
}

// ── Hex grid generation ────────────────────────────────────────────────────────
const HEX_R   = 20;                       // circumradius  (center → vertex)
const HEX_W   = Math.sqrt(3) * HEX_R;    // col spacing   ≈ 34.6 px
const ROW_H   = HEX_R * 1.5;             // row spacing   = 30 px
const DRAW_R  = HEX_R - 2;               // drawn radius  (gap = √3 × 2 ≈ 3.5 px)
const COLS    = 38;
const ROWS    = 26;

// Deterministic pseudo-random from integer seeds
function seededRand(a: number, b: number): number {
  const s = Math.sin(a * 127.1 + b * 311.7) * 43758.5453;
  return s - Math.floor(s);
}

// Pointy-top hexagon vertices
function hexPoints(cx: number, cy: number, r: number): string {
  return Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 3) * i - Math.PI / 6;
    return `${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`;
  }).join(" ");
}

interface HexTile { points: string; sOp: number; fOp: number; key: string }

// Built once at module level — stable across renders
const HEX_TILES: HexTile[] = (() => {
  const tiles: HexTile[] = [];
  for (let row = 0; row < ROWS; row++) {
    const t           = row / (ROWS - 1);              // 0 = top, 1 = bottom
    const survive     = Math.pow(1 - t, 1.8);          // sharp falloff toward bottom
    const cy          = row * ROW_H + HEX_R;
    const xOff        = row % 2 === 1 ? HEX_W / 2 : 0;

    for (let col = 0; col < COLS; col++) {
      if (seededRand(col, row) > survive) continue;

      const jitter    = seededRand(col + 50, row + 50) * 0.06;
      const sOp       = (1 - t) * 0.30 + 0.02 + jitter;
      const fOp       = (1 - t) * 0.06;

      tiles.push({
        points : hexPoints(col * HEX_W + xOff, cy, DRAW_R),
        sOp,
        fOp,
        key    : `${row}-${col}`,
      });
    }
  }
  return tiles;
})();

const SVG_W = Math.round(COLS * HEX_W);
const SVG_H = Math.round(ROWS * ROW_H);

function RotatingSubtitle({ items, intervalMs }: { items: string[]; intervalMs: number }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (items.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [items.length, intervalMs]);

  return (
    <span className="rotating-subtitle" aria-live="polite">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={items[index]}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          style={{ display: "inline-block" }}
        >
          {items[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function Hero() {
  return (
    <section className="hero">
      {/* Hexagonal tile background */}
      <div className="hero-geo-bg" aria-hidden="true">
        <svg
          width="100%"
          height="100%"
          viewBox={`0 0 ${SVG_W} ${SVG_H}`}
          preserveAspectRatio="xMidYMin slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          {HEX_TILES.map(({ points, sOp, fOp, key }) => (
            <polygon
              key={key}
              points={points}
              fill={`rgba(59,130,246,${fOp.toFixed(3)})`}
              stroke={`rgba(96,165,250,${sOp.toFixed(3)})`}
              strokeWidth="0.75"
            />
          ))}
        </svg>
      </div>

      <div className="container hero-content">
        {/* Avatar */}
        <motion.div {...fadeUp(0)}>
          {personalInfo.avatar ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={personalInfo.avatar} alt={personalInfo.name} className="hero-avatar" />
          ) : (
            <div style={{ width: 80, height: 80, margin: "0 auto 1.5rem" }} aria-hidden="true" />
          )}
        </motion.div>

        {/* Name */}
        <motion.h1 className="hero-name" {...fadeUp(0.1)}>
          {personalInfo.name}
        </motion.h1>

        {/* Rotating subtitle */}
        <motion.div className="hero-title" {...fadeUp(0.2)} style={{ minHeight: "1.5em", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <RotatingSubtitle items={rotatingSubtitles} intervalMs={5000} />
        </motion.div>

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
            Get in Touch (email)
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

