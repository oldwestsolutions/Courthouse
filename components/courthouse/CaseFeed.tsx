"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { cardItem, fadeUp, fadeUpDelayed, viewportOnce } from "@/lib/animations";
import { caseFeedContent, caseFeedFilters, cases } from "@/lib/courthouse-data";
import type { Case, UrgencyLevel } from "@/types/courthouse";

function urgencyColor(level: UrgencyLevel): string {
  switch (level) {
    case "LOW":
      return "var(--ch-urgency-low)";
    case "MEDIUM":
      return "var(--ch-urgency-medium)";
    case "HIGH":
    case "EMERGENCY":
      return "var(--ch-urgency-high)";
  }
}

function urgencyTint(level: UrgencyLevel): string {
  switch (level) {
    case "LOW":
      return "rgba(45, 122, 78, 0.15)";
    case "MEDIUM":
      return "rgba(184, 134, 11, 0.15)";
    case "HIGH":
    case "EMERGENCY":
      return "rgba(192, 57, 43, 0.15)";
  }
}

export function CaseFeed() {
  const [active, setActive] = useState("all");

  const filtered = useMemo(() => {
    if (active === "all") return cases;
    return cases.filter((c) => c.category.startsWith(active));
  }, [active]);

  return (
    <section
      id="case-feed"
      className="ch-section"
      style={{ backgroundColor: "var(--ch-navy)" }}
    >
      <div className="ch-shell py-[100px]">
        {/* Bloomberg-style dashboard header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <p
            className="text-[11px] uppercase"
            style={{ letterSpacing: "0.12em", color: "var(--ch-gold)" }}
          >
            {caseFeedContent.label}
          </p>

          <div className="relative mt-4 overflow-hidden">
            <div
              className="ch-scanline absolute left-0 top-0 h-[3px] w-1/4"
              style={{ backgroundColor: "rgba(184, 153, 106, 0.08)" }}
              aria-hidden
            />
            <div className="flex flex-col gap-3 pt-1 md:flex-row md:items-end md:justify-between">
              <h2
                className="font-display"
                style={{ fontSize: 42, color: "var(--ch-ivory)" }}
              >
                {caseFeedContent.heading}
              </h2>
              <p
                className="text-[14px] italic md:pb-2"
                style={{ color: "rgba(247, 244, 239, 0.5)" }}
              >
                {caseFeedContent.subheading}
              </p>
            </div>
          </div>
          <div
            className="mt-5 h-px w-full"
            style={{ backgroundColor: "rgba(184, 153, 106, 0.2)" }}
          />
        </motion.div>

        {/* Filter strip */}
        <motion.div
          variants={fadeUpDelayed(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-7 flex flex-wrap gap-2.5"
        >
          {caseFeedFilters.map((filter) => {
            const isActive = filter.value === active;
            return (
              <button
                key={filter.value}
                type="button"
                onClick={() => setActive(filter.value)}
                className="text-[11px] uppercase transition-colors duration-200"
                style={{
                  letterSpacing: "0.08em",
                  borderRadius: 999,
                  padding: "7px 16px",
                  backgroundColor: isActive
                    ? "var(--ch-gold)"
                    : "rgba(255, 255, 255, 0.05)",
                  color: isActive ? "var(--ch-navy)" : "rgba(247, 244, 239, 0.6)",
                  border: isActive
                    ? "1px solid var(--ch-gold)"
                    : "1px solid rgba(184, 153, 106, 0.2)",
                  fontWeight: isActive ? 600 : 400,
                }}
              >
                {filter.label}
              </button>
            );
          })}
        </motion.div>

        {/* Case grid */}
        <motion.div
          layout
          className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((c) => (
              <CaseCard key={c.id} data={c} />
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 flex justify-center"
        >
          <a
            href="#case-feed"
            className="ch-link-underline text-[13px] uppercase"
            style={{ letterSpacing: "0.1em", color: "var(--ch-gold)" }}
          >
            {caseFeedContent.viewAll}
            <svg
              className="ml-2"
              width="16"
              height="12"
              viewBox="0 0 16 12"
              fill="none"
              aria-hidden
            >
              <path
                d="M1 6h13M9 1l5 5-5 5"
                stroke="var(--ch-gold)"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function CaseCard({ data }: { data: Case }) {
  const color = urgencyColor(data.urgency);
  const tint = urgencyTint(data.urgency);

  return (
    <motion.article
      layout
      variants={cardItem}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      exit={{ opacity: 0, scale: 0.97 }}
      className="ch-case-card flex flex-col transition-colors duration-200"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.04)",
        border: "1px solid rgba(184, 153, 106, 0.12)",
        borderRadius: 6,
        padding: 24,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(184, 153, 106, 0.35)";
        e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.07)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(184, 153, 106, 0.12)";
        e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.04)";
      }}
    >
      <div className="flex items-center justify-between">
        <span
          className="text-[10px] font-semibold uppercase"
          style={{
            letterSpacing: "0.1em",
            color,
            backgroundColor: tint,
            padding: "3px 8px",
            borderRadius: 3,
          }}
        >
          {data.categoryShort}
        </span>
        <span
          className="text-[10px] font-semibold uppercase"
          style={{
            letterSpacing: "0.08em",
            color,
            backgroundColor: tint,
            padding: "3px 10px",
            borderRadius: 999,
          }}
        >
          {data.urgency}
        </span>
      </div>

      <h3
        className="mt-3.5 font-display"
        style={{ fontSize: 17, fontWeight: 600, color: "var(--ch-ivory)" }}
      >
        {data.title}
      </h3>

      <div className="mt-2 flex items-center gap-1.5">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z"
            stroke="var(--ch-gold)"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="10" r="2.2" stroke="var(--ch-gold)" strokeWidth="1.6" />
        </svg>
        <span
          className="text-[13px]"
          style={{ color: "rgba(247, 244, 239, 0.6)" }}
        >
          {data.city}, {data.state}
        </span>
      </div>

      <p
        className="line-clamp-2 mt-3 text-[13px]"
        style={{ color: "rgba(247, 244, 239, 0.55)", lineHeight: 1.6 }}
      >
        {data.description}
      </p>

      <div
        className="mt-4 grid grid-cols-3 gap-2 border-t pt-4"
        style={{ borderColor: "rgba(184, 153, 106, 0.12)" }}
      >
        <MetaPair label="Submitted" value={data.submitted} />
        <MetaPair label="Documents" value={String(data.documentCount)} />
        <MetaPair label="Est. Value" value={data.estimatedValue} />
      </div>

      <div className="mt-5 flex gap-2.5">
        <button
          type="button"
          className="flex-1 text-[11px] uppercase transition-colors duration-200"
          style={{
            letterSpacing: "0.06em",
            color: "rgba(247, 244, 239, 0.85)",
            border: "1px solid rgba(184, 153, 106, 0.3)",
            backgroundColor: "transparent",
            padding: "8px 16px",
            borderRadius: 3,
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.05)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "transparent")
          }
        >
          View Case Brief
        </button>
        <button
          type="button"
          className="flex-1 text-[11px] font-semibold uppercase transition-colors duration-200"
          style={{
            letterSpacing: "0.06em",
            backgroundColor: "var(--ch-gold)",
            color: "var(--ch-navy)",
            padding: "8px 16px",
            borderRadius: 3,
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "var(--ch-gold-muted)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "var(--ch-gold)")
          }
        >
          Express Interest
        </button>
      </div>
    </motion.article>
  );
}

function MetaPair({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-0.5">
      <span
        className="text-[10px] uppercase"
        style={{ letterSpacing: "0.06em", color: "rgba(247, 244, 239, 0.4)" }}
      >
        {label}
      </span>
      <span
        className="text-[11px]"
        style={{ color: "rgba(247, 244, 239, 0.8)" }}
      >
        {value}
      </span>
    </div>
  );
}
