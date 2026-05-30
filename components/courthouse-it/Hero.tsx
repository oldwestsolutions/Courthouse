"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import { heroCard, heroItem, staggerContainer } from "@/lib/animations";
import {
  departments,
  itHeroContent,
  itStats,
  priorityStops,
  ticketCategories,
} from "@/lib/courthouse-it-data";
import { TicketProcessingOverlay } from "./TicketProcessingOverlay";

export function Hero() {
  return (
    <section id="top" className="ch-section" style={{ backgroundColor: "var(--ch-ivory)" }}>
      <div className="ch-shell flex min-h-screen flex-col gap-14 pb-24 pt-[112px] md:flex-row md:items-center md:gap-16 md:pt-[160px]">
        <HeroCopy />
        <TicketFormCard />
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
        {itHeroContent.eyebrow}
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
        {itHeroContent.headlineLineOne}
        <br />
        <span style={{ fontStyle: "italic" }}>{itHeroContent.headlineItalic}</span>
        <br />
        {itHeroContent.headlineLineThree}
      </motion.h1>
      <motion.p
        variants={heroItem}
        className="mt-7 text-[18px]"
        style={{ color: "var(--ch-slate)", lineHeight: 1.75, maxWidth: 520 }}
      >
        {itHeroContent.subheadline}
      </motion.p>
      <motion.div variants={heroItem} className="mt-9 flex flex-wrap gap-4">
        <a
          href="#ticket-form"
          className="rounded-[4px] text-[13px] font-semibold uppercase transition-colors duration-200"
          style={{
            letterSpacing: "0.08em",
            backgroundColor: "var(--ch-gold)",
            color: "var(--ch-navy)",
            padding: "14px 28px",
          }}
        >
          {itHeroContent.primaryCta}
        </a>
        <a
          href="#knowledge-base"
          className="rounded-[4px] text-[13px] font-semibold uppercase transition-colors duration-200"
          style={{
            letterSpacing: "0.08em",
            backgroundColor: "transparent",
            color: "var(--ch-navy)",
            border: "1px solid rgba(11, 31, 59, 0.4)",
            padding: "14px 28px",
          }}
        >
          {itHeroContent.secondaryCta}
        </a>
      </motion.div>
      <motion.div
        variants={heroItem}
        className="mt-12 flex flex-wrap items-center gap-x-4 gap-y-3"
      >
        {itHeroContent.trustSignals.map((signal, i) => (
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
      <motion.div
        variants={heroItem}
        className="mt-12 flex flex-wrap gap-x-10 gap-y-4"
      >
        {itStats.map((stat) => (
          <div key={stat.label}>
            <p
              className="font-display font-bold tabular-nums"
              style={{ fontSize: 28, color: "var(--ch-navy)" }}
            >
              {stat.value}
            </p>
            <p className="mt-1 text-[12px]" style={{ color: "var(--ch-slate)" }}>
              {stat.label}
            </p>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}

function TicketFormCard() {
  const [phase, setPhase] = useState<"form" | "fading" | "processing">("form");
  const [priority, setPriority] = useState(1);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const submit = () => {
    setPhase("fading");
    setTimeout(() => setPhase("processing"), 320);
  };

  return (
    <motion.div
      id="ticket-form"
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
              <TicketProcessingOverlay onReset={() => { setPhase("form"); setPriority(1); setFileName(null); }} />
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
                <span className="text-[11px] uppercase" style={{ letterSpacing: "0.1em" }}>
                  IT Service Desk v2
                </span>
                <span
                  className="inline-block h-2 w-2 rounded-full"
                  style={{ backgroundColor: "var(--ch-gold)" }}
                  aria-hidden
                />
              </div>
              <div className="flex flex-col gap-5 p-7 md:p-9">
                <Field label="Issue Category">
                  <select className="ch-field" defaultValue="">
                    <option value="" disabled>Select a category</option>
                    {ticketCategories.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Department">
                  <select className="ch-field" defaultValue="">
                    <option value="" disabled>Select your department</option>
                    {departments.map((d) => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Subject">
                  <input
                    className="ch-field"
                    type="text"
                    placeholder="Brief summary of the issue"
                  />
                </Field>
                <Field label="Description">
                  <textarea
                    className="ch-field resize-none"
                    rows={3}
                    placeholder="Describe the issue in detail. Include error messages, steps to reproduce, and business impact."
                  />
                </Field>
                <div>
                  <div className="mb-3 flex items-baseline justify-between">
                    <FieldLabel>Priority Level</FieldLabel>
                    <span
                      className="text-[12px] font-semibold uppercase"
                      style={{ letterSpacing: "0.08em", color: "var(--ch-gold)" }}
                    >
                      {priorityStops[priority]}
                    </span>
                  </div>
                  <input
                    type="range"
                    className="ch-range"
                    min={0}
                    max={3}
                    step={1}
                    value={priority}
                    onChange={(e) => setPriority(Number(e.target.value))}
                    aria-label="Priority level"
                  />
                  <div className="mt-2 flex justify-between">
                    {priorityStops.map((stop) => (
                      <span
                        key={stop}
                        className="text-[10px] uppercase"
                        style={{ letterSpacing: "0.06em", color: "var(--ch-slate-light)" }}
                      >
                        {stop}
                      </span>
                    ))}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="flex w-full items-center justify-center gap-2 transition-colors duration-200"
                  style={{
                    border: "1.5px dashed var(--ch-border)",
                    backgroundColor: "rgba(11, 31, 59, 0.02)",
                    padding: 16,
                    borderRadius: 4,
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                    <path
                      d="M8 11V3M8 3L4.5 6.5M8 3l3.5 3.5M3 13h10"
                      stroke="var(--ch-slate-light)"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-[13px]" style={{ color: "var(--ch-slate-light)" }}>
                    {fileName ?? "Attach screenshots or logs — optional"}
                  </span>
                  <input
                    ref={fileInputRef}
                    type="file"
                    className="hidden"
                    onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
                  />
                </button>
                <button
                  type="button"
                  onClick={submit}
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
                  Submit Support Ticket
                </button>
                <p className="text-center text-[11px]" style={{ color: "var(--ch-slate-light)" }}>
                  Critical security incidents are escalated automatically within 15 minutes.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
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

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <FieldLabel>{label}</FieldLabel>
      {children}
    </div>
  );
}
