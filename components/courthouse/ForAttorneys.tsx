"use client";

import { motion } from "framer-motion";
import { cardItem, cardStagger, viewportOnce } from "@/lib/animations";
import {
  attorneyFeatures,
  attorneyStats,
  forAttorneysContent,
} from "@/lib/courthouse-data";

export function ForAttorneys() {
  return (
    <section
      id="for-attorneys"
      className="ch-section"
      style={{
        background:
          "linear-gradient(180deg, var(--ch-ivory) 0%, var(--ch-warm) 55%, var(--ch-ivory) 100%)",
      }}
    >
      <div className="ch-shell py-[100px]">
        <div className="flex flex-col gap-16 md:flex-row md:gap-20">
          {/* Left column */}
          <motion.div
            variants={cardStagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="w-full md:w-[45%]"
          >
            <motion.p
              variants={cardItem}
              className="text-[11px] uppercase"
              style={{ letterSpacing: "0.12em", color: "var(--ch-gold)" }}
            >
              {forAttorneysContent.label}
            </motion.p>
            <motion.h2
              variants={cardItem}
              className="mt-4 font-display font-bold"
              style={{ fontSize: 42, color: "var(--ch-navy)", lineHeight: 1.15 }}
            >
              {forAttorneysContent.heading}
            </motion.h2>
            <motion.p
              variants={cardItem}
              className="mt-6 text-[16px]"
              style={{ color: "var(--ch-slate)", lineHeight: 1.75 }}
            >
              {forAttorneysContent.subheading}
            </motion.p>

            <motion.div variants={cardItem} className="mt-8 flex flex-col gap-3">
              <button
                type="button"
                className="rounded-[4px] text-[13px] font-semibold uppercase transition-colors duration-200"
                style={{
                  letterSpacing: "0.08em",
                  backgroundColor: "var(--ch-navy)",
                  color: "var(--ch-gold)",
                  padding: "14px 28px",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "var(--ch-navy-light)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "var(--ch-navy)")
                }
              >
                {forAttorneysContent.primaryCta}
              </button>
              <button
                type="button"
                className="rounded-[4px] text-[13px] font-semibold uppercase transition-colors duration-200"
                style={{
                  letterSpacing: "0.08em",
                  backgroundColor: "transparent",
                  color: "var(--ch-navy)",
                  border: "1px solid rgba(11, 31, 59, 0.4)",
                  padding: "14px 28px",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "rgba(28, 58, 94, 0.06)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "transparent")
                }
              >
                {forAttorneysContent.secondaryCta}
              </button>
            </motion.div>

            <motion.div
              variants={cardItem}
              className="mt-12 flex flex-wrap gap-x-10 gap-y-6"
            >
              {attorneyStats.map((stat) => (
                <div key={stat.label} className="max-w-[150px]">
                  <p
                    className="font-display font-bold tabular-nums"
                    style={{ fontSize: 28, color: "var(--ch-navy)" }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="mt-1 text-[12px]"
                    style={{ color: "var(--ch-slate)" }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right column — feature list */}
          <motion.div
            variants={cardStagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="w-full md:w-[55%]"
          >
            {attorneyFeatures.map((feature, i) => (
              <motion.div
                key={feature.number}
                variants={cardItem}
                className="flex gap-5 py-5"
                style={{
                  borderBottom:
                    i === attorneyFeatures.length - 1
                      ? "none"
                      : "1px solid var(--ch-border)",
                }}
              >
                <span
                  className="font-display"
                  style={{ fontSize: 18, color: "var(--ch-gold)" }}
                >
                  {feature.number}
                </span>
                <div>
                  <h3
                    className="font-display"
                    style={{ fontSize: 18, color: "var(--ch-navy)" }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="mt-1.5 text-[14px]"
                    style={{ color: "var(--ch-slate)", lineHeight: 1.6 }}
                  >
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
