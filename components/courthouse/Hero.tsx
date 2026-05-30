"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import { heroCard, heroItem, staggerContainer } from "@/lib/animations";
import {
  heroContent,
  legalCategories,
  urgencyStops,
  usStates,
} from "@/lib/courthouse-data";
import { IntakeProcessingOverlay } from "./IntakeProcessingOverlay";

export function Hero() {
  return (
    <section id="top" className="ch-section" style={{ backgroundColor: "var(--ch-ivory)" }}>
      <div className="ch-shell flex min-h-screen flex-col gap-14 pb-24 pt-[112px] md:flex-row md:items-center md:gap-16 md:pt-[160px]">
        <HeroCopy />
        <HeroCard />
      </div>
    </section>
  );
}

function HeroCopy() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="w-full md:w-[55%]"
    >
      <motion.p
        variants={heroItem}
        className="text-[11px] uppercase"
        style={{ letterSpacing: "0.12em", color: "var(--ch-gold)" }}
      >
        {heroContent.eyebrow}
      </motion.p>

      <motion.div
        variants={heroItem}
        className="mb-7 mt-4 h-px"
        style={{ width: 48, backgroundColor: "rgba(184, 153, 106, 0.3)" }}
      />

      <motion.h1
        variants={heroItem}
        className="font-display font-bold"
        style={{
          color: "var(--ch-navy)",
          lineHeight: 1.08,
          letterSpacing: "-0.025em",
          fontSize: "clamp(36px, 6vw, 72px)",
        }}
      >
        {heroContent.headlineLineOne}
        <br />
        <span style={{ fontStyle: "italic" }}>{heroContent.headlineItalic}</span>
        <br />
        {heroContent.headlineLineThree}
      </motion.h1>

      <motion.p
        variants={heroItem}
        className="mt-7 text-[18px]"
        style={{
          color: "var(--ch-slate)",
          lineHeight: 1.75,
          maxWidth: 520,
        }}
      >
        {heroContent.subheadline}
      </motion.p>

      <motion.div variants={heroItem} className="mt-9 flex flex-wrap gap-4">
        <button
          type="button"
          className="rounded-[4px] text-[13px] font-semibold uppercase transition-colors duration-200"
          style={{
            letterSpacing: "0.08em",
            backgroundColor: "var(--ch-gold)",
            color: "var(--ch-navy)",
            padding: "14px 28px",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "var(--ch-gold-muted)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "var(--ch-gold)")
          }
        >
          {heroContent.primaryCta}
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
          {heroContent.secondaryCta}
        </button>
      </motion.div>

      <motion.div
        variants={heroItem}
        className="mt-12 flex flex-wrap items-center gap-x-4 gap-y-3"
      >
        {heroContent.trustSignals.map((signal, i) => (
          <div key={signal} className="flex items-center gap-x-4">
            {i > 0 && (
              <span
                className="hidden h-1 w-1 rounded-full sm:inline-block"
                style={{ backgroundColor: "var(--ch-slate-light)" }}
                aria-hidden
              />
            )}
            <span
              className="text-[12px] uppercase"
              style={{ letterSpacing: "0.08em", color: "var(--ch-slate-light)" }}
            >
              {signal}
            </span>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}

function HeroCard() {
  const [phase, setPhase] = useState<"form" | "fading" | "processing">("form");
  const [urgency, setUrgency] = useState(1);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const startProcessing = () => {
    setPhase("fading");
    // Form content fades out over 0.3s, then swap to processing overlay.
    setTimeout(() => setPhase("processing"), 320);
  };

  const reset = () => {
    setPhase("form");
    setUrgency(1);
    setFileName(null);
  };

  return (
    <motion.div
      variants={heroCard}
      initial="hidden"
      animate="visible"
      className="w-full md:w-[45%]"
    >
      <div
        className="overflow-hidden"
        style={{
          backgroundColor: "var(--ch-white)",
          border: "1px solid var(--ch-border)",
          boxShadow: "0 24px 80px rgba(11, 31, 59, 0.12)",
          borderRadius: 8,
        }}
      >
        <AnimatePresence mode="wait">
          {phase === "processing" ? (
            <motion.div
              key="processing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <IntakeProcessingOverlay onReset={reset} />
            </motion.div>
          ) : (
            <motion.div
              key="form"
              animate={{ opacity: phase === "fading" ? 0 : 1 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className="flex items-center justify-between"
                style={{
                  backgroundColor: "var(--ch-navy)",
                  color: "var(--ch-ivory)",
                  padding: "10px 16px",
                }}
              >
                <span
                  className="text-[11px] uppercase"
                  style={{ letterSpacing: "0.1em" }}
                >
                  Case Intake System v1
                </span>
                <span
                  className="inline-block h-2 w-2 rounded-full"
                  style={{ backgroundColor: "var(--ch-gold)" }}
                  aria-hidden
                />
              </div>

              <div className="flex flex-col gap-5 p-7 md:p-9">
                <Field label="Legal Category">
                  <select className="ch-field" defaultValue="">
                    <option value="" disabled>
                      Select a category
                    </option>
                    {legalCategories.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field label="Jurisdiction">
                  <select className="ch-field" defaultValue="">
                    <option value="" disabled>
                      Select your state
                    </option>
                    {usStates.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field label="Brief Description">
                  <textarea
                    className="ch-field resize-none"
                    rows={3}
                    placeholder="Describe the legal situation in plain language. The system will structure and classify your submission."
                  />
                </Field>

                <div>
                  <div className="mb-3 flex items-baseline justify-between">
                    <FieldLabel>Urgency Level</FieldLabel>
                    <span
                      className="text-[12px] font-semibold uppercase"
                      style={{ letterSpacing: "0.08em", color: "var(--ch-gold)" }}
                    >
                      {urgencyStops[urgency]}
                    </span>
                  </div>
                  <input
                    type="range"
                    className="ch-range"
                    min={0}
                    max={3}
                    step={1}
                    value={urgency}
                    onChange={(e) => setUrgency(Number(e.target.value))}
                    aria-label="Urgency level"
                  />
                  <div className="mt-2 flex justify-between">
                    {urgencyStops.map((stop) => (
                      <span
                        key={stop}
                        className="text-[10px] uppercase"
                        style={{
                          letterSpacing: "0.06em",
                          color: "var(--ch-slate-light)",
                        }}
                      >
                        {stop}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="flex w-full items-center justify-center gap-2 text-left transition-colors duration-200"
                  style={{
                    border: "1.5px dashed var(--ch-border)",
                    backgroundColor: "rgba(11, 31, 59, 0.02)",
                    padding: 16,
                    borderRadius: 4,
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M8 11V3M8 3L4.5 6.5M8 3l3.5 3.5M3 13h10"
                      stroke="var(--ch-slate-light)"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span
                    className="text-[13px]"
                    style={{ color: "var(--ch-slate-light)" }}
                  >
                    {fileName ?? "Attach supporting documents — optional"}
                  </span>
                  <input
                    ref={fileInputRef}
                    type="file"
                    className="hidden"
                    onChange={(e) =>
                      setFileName(e.target.files?.[0]?.name ?? null)
                    }
                  />
                </button>

                <HeroSubmitButton onClick={startProcessing} />

                <p
                  className="text-center text-[11px]"
                  style={{ color: "var(--ch-slate-light)" }}
                >
                  Submission does not create an attorney-client relationship.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

function HeroSubmitButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full rounded-[4px] text-[13px] font-semibold uppercase transition-all duration-200"
      style={{
        letterSpacing: "0.08em",
        backgroundColor: "var(--ch-navy)",
        color: "var(--ch-ivory)",
        padding: 14,
        border: "1px solid transparent",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "var(--ch-navy-light)";
        e.currentTarget.style.borderColor = "rgba(184, 153, 106, 0.5)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "var(--ch-navy)";
        e.currentTarget.style.borderColor = "transparent";
      }}
    >
      Analyze My Case
    </button>
  );
}

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <label
      className="text-[11px] font-semibold uppercase"
      style={{ letterSpacing: "0.1em", color: "var(--ch-navy)" }}
    >
      {children}
    </label>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <FieldLabel>{label}</FieldLabel>
      {children}
    </div>
  );
}
