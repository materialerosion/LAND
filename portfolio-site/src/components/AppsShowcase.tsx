"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { apps, categories, type AppCategory } from "@/data/portfolio";

const statusLabels: Record<string, string> = {
  live: "Live",
  beta: "Beta",
  "in-progress": "In Progress",
};

export default function AppsShowcase() {
  const [activeCategory, setActiveCategory] = useState<AppCategory>("all");

  const filtered =
    activeCategory === "all"
      ? apps
      : apps.filter((a) => a.category === activeCategory);

  return (
    <section id="apps">
      <div className="container">
        <h2 className="section-title">
          <span className="section-accent">⟩</span> Shipped Apps
        </h2>

        {/* Category filter tabs */}
        <div className="category-tabs" role="tablist" aria-label="App categories">
          {categories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeCategory === cat.id}
              className={`category-tab${activeCategory === cat.id ? " active" : ""}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              <span>{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Count indicator */}
        <p
          style={{
            fontSize: "0.8rem",
            color: "var(--text-muted)",
            marginBottom: "1.5rem",
            marginTop: "-1rem",
          }}
        >
          {filtered.length} app{filtered.length !== 1 ? "s" : ""}
          {activeCategory !== "all"
            ? ` in ${categories.find((c) => c.id === activeCategory)?.label}`
            : " total"}
        </p>

        {/* Apps grid */}
        <motion.div
          className="apps-grid"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((app) => (
              <motion.div
                key={app.id}
                layout
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                {app.url ? (
                  <a
                    href={app.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card app-card"
                    aria-label={`${app.name} — ${app.tagline}`}
                  >
                    <AppCardInner app={app} />
                  </a>
                ) : (
                  <div className="glass-card app-card">
                    <AppCardInner app={app} />
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function AppCardInner({ app }: { app: (typeof apps)[number] }) {
  return (
    <>
      <div className="app-card-header">
        <div>
          <div className="app-name">{app.name}</div>
          <div className="app-tagline">{app.tagline}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.4rem" }}>
          <span className="app-icon">{app.icon}</span>
          <span className={`status-badge ${app.status}`}>
            <span
              style={{
                width: "5px",
                height: "5px",
                borderRadius: "50%",
                background: "currentColor",
                display: "inline-block",
              }}
            />
            {statusLabels[app.status]}
          </span>
        </div>
      </div>

      <p className="app-description">{app.description}</p>

      <div className="app-footer">
        <div className="app-tech">
          {app.tech?.map((t) => (
            <span className="tech-tag" key={t}>
              {t}
            </span>
          ))}
        </div>
        {app.url && (
          <span className="app-link">
            Open <span aria-hidden="true">→</span>
          </span>
        )}
      </div>
    </>
  );
}
