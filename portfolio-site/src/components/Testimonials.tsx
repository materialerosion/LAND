"use client";
import { testimonials } from "@/data/portfolio";

// Split testimonials into two rows
const row1 = testimonials.slice(0, Math.ceil(testimonials.length / 2));
const row2 = testimonials.slice(Math.ceil(testimonials.length / 2));

// Duplicate each row so the marquee loops seamlessly
const row1Doubled = [...row1, ...row1];
const row2Doubled = [...row2, ...row2];

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ paddingLeft: 0, paddingRight: 0 }}>
      <div className="container" style={{ paddingLeft: "1.5rem", paddingRight: "1.5rem" }}>
        <h2 className="section-title">
          <span className="section-accent">⟩</span> What People Say
        </h2>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="marquee-outer" style={{ marginBottom: "1rem" }}>
        <div className="marquee-row forward">
          {row1Doubled.map((t, i) => (
            <div className="testimonial-card" key={`r1-${t.id}-${i}`}>
              <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
              <div>
                <div className="testimonial-author">{t.author}</div>
                {t.role && <div className="testimonial-role">{t.role}</div>}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="marquee-outer">
        <div className="marquee-row reverse">
          {row2Doubled.map((t, i) => (
            <div className="testimonial-card" key={`r2-${t.id}-${i}`}>
              <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
              <div>
                <div className="testimonial-author">{t.author}</div>
                {t.role && <div className="testimonial-role">{t.role}</div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
