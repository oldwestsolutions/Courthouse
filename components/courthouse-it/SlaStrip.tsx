"use client";

import { motion } from "framer-motion";
import { fadeUp, fadeUpDelayed, viewportOnce } from "@/lib/animations";
import { slaTiers } from "@/lib/courthouse-it-data";
import type { TicketPriority } from "@/types/courthouse-it";

function priorityColor(level: TicketPriority): string {
  switch (level) {
    case "LOW":
      return "var(--ch-urgency-low)";
    case "MEDIUM":
      return "var(--ch-urgency-medium)";
    case "HIGH":
    case "CRITICAL":
      return "var(--ch-urgency-high)";
  }
}

export function SlaStrip() {
  return (
    <section className="ch-section" style={{ backgroundColor: "var(--ch-navy-mid)" }}>
      <div className="ch-shell py-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center"
        >
          <p
            className="text-[11px] uppercase"
            style={{ letterSpacing: "0.12em", color: "var(--ch-gold)" }}
          >
            SLA COMMITMENTS
          </p>
          <h2
            className="mt-3 font-display"
            style={{ fontSize: 32, color: "var(--ch-ivory)" }}
          >
            Guaranteed Response Times
          </h2>
        </motion.div>

        <motion.div
          variants={fadeUpDelayed(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {slaTiers.map((tier) => (
            <div
              key={tier.priority}
              className="text-center"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.04)",
                border: "1px solid rgba(184, 153, 106, 0.15)",
                borderRadius: 8,
                padding: "28px 20px",
              }}
            >
              <span
                className="text-[11px] font-semibold uppercase"
                style={{
                  letterSpacing: "0.1em",
                  color: priorityColor(tier.priority),
                }}
              >
                {tier.priority}
              </span>
              <p
                className="mt-4 font-display font-bold"
                style={{ fontSize: 28, color: "var(--ch-ivory)" }}
              >
                {tier.responseTime}
              </p>
              <p
                className="mt-1 text-[11px] uppercase"
                style={{ letterSpacing: "0.08em", color: "rgba(247, 244, 239, 0.45)" }}
              >
                First Response
              </p>
              <div
                className="mx-auto my-4 h-px w-8"
                style={{ backgroundColor: "rgba(184, 153, 106, 0.3)" }}
              />
              <p
                className="font-display font-bold"
                style={{ fontSize: 22, color: "var(--ch-ivory)" }}
              >
                {tier.resolutionTime}
              </p>
              <p
                className="mt-1 text-[11px] uppercase"
                style={{ letterSpacing: "0.08em", color: "rgba(247, 244, 239, 0.45)" }}
              >
                Target Resolution
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
