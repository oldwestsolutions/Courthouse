"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { intakeMatches, intakeProcessingMessages } from "@/lib/courthouse-data";

export function IntakeProcessingOverlay({ onReset }: { onReset: () => void }) {
  // Number of status messages currently revealed (0..3), then "done" -> results.
  const [revealed, setRevealed] = useState(0);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    // Message 1 at 0s, Message 2 at 1.4s, Message 3 at 2.8s.
    timers.push(setTimeout(() => setRevealed(1), 0));
    timers.push(setTimeout(() => setRevealed(2), 1400));
    timers.push(setTimeout(() => setRevealed(3), 2800));
    // Hold the third message 1.2s, then reveal results.
    timers.push(setTimeout(() => setShowResults(true), 4000));
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="flex flex-col">
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
          className="ch-pulse-dot inline-block h-2 w-2 rounded-full"
          style={{ backgroundColor: "var(--ch-gold)" }}
          aria-hidden
        />
      </div>

      <div className="px-1 py-2">
        {!showResults ? (
          <div className="flex min-h-[360px] flex-col justify-center gap-7 px-5 py-8">
            {intakeProcessingMessages.map((message, i) => (
              <AnimatePresence key={message}>
                {revealed > i && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex items-center gap-4"
                  >
                    <span
                      className={`inline-block h-2.5 w-2.5 rounded-full ${
                        revealed === i + 1 ? "ch-pulse-dot" : ""
                      }`}
                      style={{ backgroundColor: "var(--ch-gold)" }}
                      aria-hidden
                    />
                    <span
                      className="font-display"
                      style={{
                        fontSize: 18,
                        color:
                          revealed === i + 1
                            ? "var(--ch-navy)"
                            : "var(--ch-slate)",
                      }}
                    >
                      {message}
                      {revealed === i + 1 ? "…" : ""}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="px-5 py-6"
          >
            <div className="mb-5 flex items-center justify-between">
              <span
                className="text-[11px] uppercase"
                style={{
                  letterSpacing: "0.12em",
                  color: "var(--ch-gold)",
                }}
              >
                Match Complete · 3 Attorneys
              </span>
              <span
                className="text-[11px] uppercase"
                style={{ letterSpacing: "0.08em", color: "var(--ch-slate-light)" }}
              >
                Ranked by Relevance
              </span>
            </div>

            <div className="flex flex-col gap-3">
              {intakeMatches.map((atty) => (
                <div
                  key={atty.id}
                  className="rounded-[5px] p-4"
                  style={{
                    border: "1px solid var(--ch-border)",
                    backgroundColor: "rgba(11, 31, 59, 0.02)",
                  }}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p
                        className="font-display"
                        style={{
                          fontSize: 16,
                          fontWeight: 600,
                          color: "var(--ch-navy)",
                        }}
                      >
                        {atty.name}
                      </p>
                      <p
                        className="mt-1 text-[12px]"
                        style={{ color: "var(--ch-slate)" }}
                      >
                        {atty.specialty} · {atty.jurisdiction}
                      </p>
                    </div>
                    <div className="text-right">
                      <p
                        className="font-display tabular-nums"
                        style={{
                          fontSize: 22,
                          fontWeight: 700,
                          color: "var(--ch-navy)",
                          lineHeight: 1,
                        }}
                      >
                        {atty.matchScore}
                      </p>
                      <p
                        className="mt-0.5 text-[10px] uppercase"
                        style={{
                          letterSpacing: "0.1em",
                          color: "var(--ch-slate-light)",
                        }}
                      >
                        / 1000
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="mt-3 w-full rounded-[3px] text-[11px] font-semibold uppercase transition-colors duration-200"
                    style={{
                      letterSpacing: "0.06em",
                      backgroundColor: "var(--ch-navy)",
                      color: "var(--ch-ivory)",
                      padding: "9px 16px",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor =
                        "var(--ch-navy-light)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = "var(--ch-navy)")
                    }
                  >
                    Book Consultation
                  </button>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={onReset}
              className="ch-link-underline mx-auto mt-6 block text-[11px] uppercase"
              style={{ letterSpacing: "0.1em", color: "var(--ch-gold)" }}
            >
              Submit another case
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
