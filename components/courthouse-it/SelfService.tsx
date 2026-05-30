"use client";

import { motion } from "framer-motion";
import {
  cardItem,
  cardStagger,
  fadeUp,
  fadeUpDelayed,
  viewportOnce,
} from "@/lib/animations";
import { selfServiceActions } from "@/lib/courthouse-it-data";
import type { SelfServiceAction } from "@/types/courthouse-it";

function ActionIcon({ icon }: { icon: SelfServiceAction["icon"] }) {
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
    case "password":
      return (
        <svg {...common} aria-hidden>
          <rect x="5" y="11" width="14" height="10" rx="2" />
          <path d="M8 11V8a4 4 0 0 1 8 0v3" />
        </svg>
      );
    case "vpn":
      return (
        <svg {...common} aria-hidden>
          <path d="M12 3 4 9v12h16V9l-8-6Z" />
          <path d="M9 14h6M12 11v6" />
        </svg>
      );
    case "software":
      return (
        <svg {...common} aria-hidden>
          <path d="M4 7h16v10H4z" />
          <path d="M8 11h8M8 15h5" />
        </svg>
      );
    case "access":
      return (
        <svg {...common} aria-hidden>
          <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3Z" />
          <path d="M9 12h6" />
        </svg>
      );
    case "device":
      return (
        <svg {...common} aria-hidden>
          <rect x="7" y="2" width="10" height="18" rx="2" />
          <path d="M11 18h2" />
        </svg>
      );
    case "status":
      return (
        <svg {...common} aria-hidden>
          <circle cx="12" cy="12" r="8" />
          <path d="M12 8v4l3 2" />
        </svg>
      );
  }
}

export function SelfService() {
  return (
    <section
      id="self-service"
      className="ch-section"
      style={{
        background:
          "linear-gradient(180deg, var(--ch-ivory) 0%, var(--ch-warm) 55%, var(--ch-ivory) 100%)",
      }}
    >
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
            SELF-SERVICE PORTAL
          </motion.p>
          <motion.h2
            variants={fadeUpDelayed(0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-4 font-display"
            style={{ fontSize: 42, color: "var(--ch-navy)", lineHeight: 1.15 }}
          >
            Resolve Without Opening a Ticket
          </motion.h2>
          <motion.p
            variants={fadeUpDelayed(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mx-auto mt-5 max-w-[540px] text-[16px]"
            style={{ color: "var(--ch-slate)", lineHeight: 1.7 }}
          >
            Common requests handled instantly through self-service — no queue, no
            wait. Each action is logged for audit compliance.
          </motion.p>
        </div>

        <motion.div
          variants={cardStagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {selfServiceActions.map((action) => (
            <motion.article
              key={action.id}
              variants={cardItem}
              className="transition-all duration-200"
              style={{
                backgroundColor: "var(--ch-white)",
                border: "1px solid var(--ch-border)",
                borderRadius: 8,
                padding: 28,
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
                <ActionIcon icon={action.icon} />
              </div>
              <h3
                className="mt-5 font-display"
                style={{ fontSize: 20, fontWeight: 600, color: "var(--ch-navy)" }}
              >
                {action.title}
              </h3>
              <div
                className="my-3 h-px"
                style={{ width: 32, backgroundColor: "rgba(184, 153, 106, 0.4)" }}
              />
              <p
                className="text-[14px]"
                style={{ color: "var(--ch-slate)", lineHeight: 1.6 }}
              >
                {action.description}
              </p>
              <button
                type="button"
                className="ch-link-underline mt-5 text-[11px] uppercase"
                style={{ letterSpacing: "0.08em", color: "var(--ch-gold)" }}
              >
                {action.action}
              </button>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
