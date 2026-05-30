"use client";

import { motion } from "framer-motion";
import {
  cardItem,
  cardStagger,
  fadeUp,
  fadeUpDelayed,
  viewportOnce,
} from "@/lib/animations";
import { howItWorksContent, processSteps } from "@/lib/courthouse-data";

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="ch-section"
      style={{ backgroundColor: "var(--ch-navy)" }}
    >
      <div className="ch-shell py-[100px]">
        <div className="mx-auto max-w-[640px] text-center">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-[11px] uppercase"
            style={{ letterSpacing: "0.12em", color: "var(--ch-gold)" }}
          >
            {howItWorksContent.label}
          </motion.p>
          <motion.h2
            variants={fadeUpDelayed(0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-4 font-display"
            style={{ fontSize: 42, color: "var(--ch-ivory)" }}
          >
            {howItWorksContent.heading}
          </motion.h2>
          <motion.p
            variants={fadeUpDelayed(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mx-auto mt-5 max-w-[560px] text-[16px]"
            style={{ color: "rgba(247, 244, 239, 0.65)", lineHeight: 1.7 }}
          >
            {howItWorksContent.subheading}
          </motion.p>
        </div>

        <motion.div
          variants={cardStagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {processSteps.map((step) => (
            <motion.article
              key={step.number}
              variants={cardItem}
              className="relative overflow-hidden"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.04)",
                border: "1px solid rgba(184, 153, 106, 0.15)",
                borderRadius: 8,
                padding: "40px 36px",
              }}
            >
              <span
                className="pointer-events-none absolute left-6 top-3 select-none font-display font-bold"
                style={{ fontSize: 72, color: "rgba(184, 153, 106, 0.15)" }}
                aria-hidden
              >
                {step.number}
              </span>

              <div className="relative">
                <h3
                  className="font-display"
                  style={{ fontSize: 22, color: "var(--ch-ivory)" }}
                >
                  {step.name}
                </h3>
                <div
                  className="my-5 h-px"
                  style={{
                    width: 40,
                    backgroundColor: "rgba(184, 153, 106, 0.35)",
                  }}
                />
                <p
                  className="text-[15px]"
                  style={{ color: "rgba(247, 244, 239, 0.7)", lineHeight: 1.7 }}
                >
                  {step.body}
                </p>
                <ul className="mt-6 flex flex-col gap-3">
                  {step.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <span
                        className="inline-block h-1.5 w-1.5 flex-shrink-0"
                        style={{ backgroundColor: "var(--ch-gold)" }}
                        aria-hidden
                      />
                      <span
                        className="text-[13px]"
                        style={{ color: "rgba(247, 244, 239, 0.75)" }}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
