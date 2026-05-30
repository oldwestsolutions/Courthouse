"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/animations";
import { complianceItems } from "@/lib/courthouse-data";

export function ComplianceStrip() {
  return (
    <section
      className="ch-section"
      style={{
        backgroundColor: "var(--ch-navy)",
        borderTop: "1px solid rgba(184, 153, 106, 0.2)",
      }}
    >
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="ch-shell flex flex-wrap items-center gap-x-12 gap-y-4 py-12"
      >
        {complianceItems.map((item) => (
          <div key={item} className="flex items-center gap-2.5">
            <span
              className="inline-block h-1.5 w-1.5"
              style={{ backgroundColor: "rgba(184, 153, 106, 0.4)" }}
              aria-hidden
            />
            <span
              className="text-[11px] uppercase"
              style={{
                letterSpacing: "0.1em",
                color: "rgba(247, 244, 239, 0.45)",
              }}
            >
              {item}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
