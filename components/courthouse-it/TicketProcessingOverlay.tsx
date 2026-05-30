"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ticketProcessingMessages,
  ticketSubmissionResult,
} from "@/lib/courthouse-it-data";

export function TicketProcessingOverlay({ onReset }: { onReset: () => void }) {
  const [revealed, setRevealed] = useState(0);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setRevealed(1), 0),
      setTimeout(() => setRevealed(2), 1400),
      setTimeout(() => setRevealed(3), 2800),
      setTimeout(() => setShowResult(true), 4000),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const result = ticketSubmissionResult;

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
        <span className="text-[11px] uppercase" style={{ letterSpacing: "0.1em" }}>
          IT Service Desk v2
        </span>
        <span
          className="ch-pulse-dot inline-block h-2 w-2 rounded-full"
          style={{ backgroundColor: "var(--ch-gold)" }}
          aria-hidden
        />
      </div>

      <div className="px-1 py-2">
        {!showResult ? (
          <div className="flex min-h-[360px] flex-col justify-center gap-7 px-5 py-8">
            {ticketProcessingMessages.map((message, i) => (
              <AnimatePresence key={message}>
                {revealed > i && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex items-center gap-4"
                  >
                    <span
                      className={`inline-block h-2.5 w-2.5 rounded-full ${revealed === i + 1 ? "ch-pulse-dot" : ""}`}
                      style={{ backgroundColor: "var(--ch-gold)" }}
                      aria-hidden
                    />
                    <span
                      className="font-display"
                      style={{
                        fontSize: 18,
                        color:
                          revealed === i + 1 ? "var(--ch-navy)" : "var(--ch-slate)",
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
                style={{ letterSpacing: "0.12em", color: "var(--ch-gold)" }}
              >
                Ticket Created · {result.ticketNumber}
              </span>
              <span
                className="text-[11px] uppercase"
                style={{ letterSpacing: "0.08em", color: "var(--ch-slate-light)" }}
              >
                SLA Tier {result.slaTier}
              </span>
            </div>

            <div
              className="rounded-[5px] p-5"
              style={{
                border: "1px solid var(--ch-border)",
                backgroundColor: "rgba(11, 31, 59, 0.02)",
              }}
            >
              <div className="grid grid-cols-2 gap-4">
                <ResultField label="Ticket Number" value={result.ticketNumber} />
                <ResultField label="Priority" value={result.slaTier} />
                <ResultField label="Assigned Queue" value={result.assignee} />
                <ResultField label="Est. Response" value={result.estimatedResponse} />
              </div>
              <p
                className="mt-4 text-[12px]"
                style={{ color: "var(--ch-slate)", lineHeight: 1.6 }}
              >
                Your ticket has been logged and routed. You will receive email
                confirmation with tracking details. Reference your ticket number
                for all follow-up communication.
              </p>
              <button
                type="button"
                className="mt-4 w-full rounded-[3px] text-[11px] font-semibold uppercase transition-colors duration-200"
                style={{
                  letterSpacing: "0.06em",
                  backgroundColor: "var(--ch-navy)",
                  color: "var(--ch-ivory)",
                  padding: "11px 16px",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "var(--ch-navy-light)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "var(--ch-navy)")
                }
              >
                Track This Ticket
              </button>
            </div>

            <button
              type="button"
              onClick={onReset}
              className="ch-link-underline mx-auto mt-6 block text-[11px] uppercase"
              style={{ letterSpacing: "0.1em", color: "var(--ch-gold)" }}
            >
              Submit another ticket
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}

function ResultField({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p
        className="text-[10px] uppercase"
        style={{ letterSpacing: "0.08em", color: "var(--ch-slate-light)" }}
      >
        {label}
      </p>
      <p
        className="mt-0.5 font-display text-[15px] font-semibold"
        style={{ color: "var(--ch-navy)" }}
      >
        {value}
      </p>
    </div>
  );
}
