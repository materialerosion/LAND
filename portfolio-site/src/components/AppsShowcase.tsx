"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { apps, categories, type AppCategory } from "@/data/portfolio";

const statusLabels: Record<string, string> = {
  live: "Live",
  beta: "Beta",
  "in-progress": "In Progress",
  "on-hold": "On Hold",
};

const STATUS_ORDER: (typeof apps)[number]["status"][] = [
  "live",
  "beta",
  "in-progress",
  "on-hold",
];

function sortByStatus<T extends { status: (typeof apps)[number]["status"] }>(
  list: T[]
): T[] {
  return [...list].sort(
    (a, b) =>
      STATUS_ORDER.indexOf(a.status) - STATUS_ORDER.indexOf(b.status)
  );
}

export default function AppsShowcase() {
  const [activeCategory, setActiveCategory] = useState<AppCategory>("all");
  const [showInDevelopment, setShowInDevelopment] = useState(false);

  const filtered = useMemo(() => {
    let list =
      activeCategory === "all"
        ? apps
        : apps.filter((a) => a.category === activeCategory);
    if (!showInDevelopment) {
      list = list.filter((a) => a.status === "live");
    }
    return sortByStatus(list);
  }, [activeCategory, showInDevelopment]);

  return (
    <section id="apps">
      <div className="container">
        <h2 className="section-title">
          <span className="section-accent">⟩</span> Shipped Apps
        </h2>

        {/* Category filter tabs + in-development toggle */}
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
          <label
            className={`category-tab in-dev-toggle${showInDevelopment ? " active" : ""}`}
            aria-label="Show in-development apps"
          >
            <input
              type="checkbox"
              checked={showInDevelopment}
              onChange={(e) => setShowInDevelopment(e.target.checked)}
              tabIndex={0}
            />
            <span aria-hidden>🛠️</span>
            <span>In development</span>
          </label>
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
