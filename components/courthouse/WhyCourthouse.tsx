"use client";

import { motion } from "framer-motion";
import {
  cardItem,
  cardStagger,
  fadeUp,
  fadeUpDelayed,
  viewportOnce,
} from "@/lib/animations";
import { featureCards, whyCourthouseContent } from "@/lib/courthouse-data";
import type { FeatureCard } from "@/types/courthouse";

function FeatureIcon({ icon }: { icon: FeatureCard["icon"] }) {
  const common = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--ch-navy)",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (icon) {
    case "list":
      return (
        <svg {...common} aria-hidden>
          <path d="M8 6h12M8 12h12M8 18h12" />
          <path d="M3.5 6h.01M3.5 12h.01M3.5 18h.01" />
        </svg>
      );
    case "pin":
      return (
        <svg {...common} aria-hidden>
          <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      );
    case "dial":
      return (
        <svg {...common} aria-hidden>
          <path d="M4 8h10M18 8h2M4 16h2M10 16h10" />
          <circle cx="16" cy="8" r="2.5" />
          <circle cx="8" cy="16" r="2.5" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common} aria-hidden>
          <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3Z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
  }
}

export function WhyCourthouse() {
  return (
    <section className="ch-section" style={{ backgroundColor: "var(--ch-ivory)" }}>
      <div className="ch-shell py-[100px]">
        <div className="mx-auto max-w-[620px] text-center">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-[11px] uppercase"
            style={{ letterSpacing: "0.12em", color: "var(--ch-gold)" }}
          >
            {whyCourthouseContent.label}
          </motion.p>
          <motion.h2
            variants={fadeUpDelayed(0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-4 font-display"
            style={{ fontSize: 42, color: "var(--ch-navy)", lineHeight: 1.15 }}
          >
            {whyCourthouseContent.heading}
          </motion.h2>
          <motion.p
            variants={fadeUpDelayed(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mx-auto mt-5 max-w-[540px] text-[16px]"
            style={{ color: "var(--ch-slate)", lineHeight: 1.7 }}
          >
            {whyCourthouseContent.subheading}
          </motion.p>
        </div>

        <motion.div
          variants={cardStagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {featureCards.map((card) => (
            <motion.article
              key={card.id}
              variants={cardItem}
              className="ch-feature-card transition-all duration-200"
              style={{
                backgroundColor: "var(--ch-white)",
                border: "1px solid var(--ch-border)",
                borderRadius: 8,
                padding: 36,
              }}
              whileHover={{ y: -3, boxShadow: "0 8px 40px rgba(11, 31, 59, 0.08)" }}
            >
              <div
                className="flex items-center justify-center"
                style={{
                  width: 36,
                  height: 36,
                  backgroundColor: "rgba(11, 31, 59, 0.04)",
                  border: "1px solid var(--ch-border)",
                  borderRadius: 4,
                }}
              >
                <FeatureIcon icon={card.icon} />
              </div>

              <h3
                className="mt-6 font-display"
                style={{ fontSize: 22, fontWeight: 600, color: "var(--ch-navy)" }}
              >
                {card.heading}
              </h3>
              <div
                className="my-4 h-px"
                style={{ width: 32, backgroundColor: "rgba(184, 153, 106, 0.4)" }}
              />
              <p
                className="text-[15px]"
                style={{ color: "var(--ch-slate)", lineHeight: 1.7 }}
              >
                {card.body}
              </p>

              <div className="mt-6 flex items-baseline gap-3">
                <span
                  className="font-display font-bold tabular-nums"
                  style={{ fontSize: 32, color: "var(--ch-navy)" }}
                >
                  {card.stat}
                </span>
                <span
                  className="text-[13px]"
                  style={{ color: "var(--ch-slate)", maxWidth: 220 }}
                >
                  {card.descriptor}
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
