"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { cardItem, fadeUp, fadeUpDelayed, viewportOnce } from "@/lib/animations";
import { supportTickets, ticketFilters, ticketQueueContent } from "@/lib/courthouse-it-data";
import type { TicketPriority, TicketStatus } from "@/types/courthouse-it";

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

function priorityTint(level: TicketPriority): string {
  switch (level) {
    case "LOW":
      return "rgba(45, 122, 78, 0.15)";
    case "MEDIUM":
      return "rgba(184, 134, 11, 0.15)";
    case "HIGH":
    case "CRITICAL":
      return "rgba(192, 57, 43, 0.15)";
  }
}

function statusColor(status: TicketStatus): string {
  switch (status) {
    case "NEW":
      return "var(--ch-gold)";
    case "IN PROGRESS":
      return "rgba(247, 244, 239, 0.85)";
    case "PENDING":
      return "var(--ch-urgency-medium)";
    case "RESOLVED":
      return "var(--ch-urgency-low)";
  }
}

export function TicketQueue() {
  const [active, setActive] = useState("all");

  const filtered = useMemo(() => {
    if (active === "all") return supportTickets;
    return supportTickets.filter((t) => t.category.startsWith(active));
  }, [active]);

  return (
    <section
      id="ticket-queue"
      className="ch-section"
      style={{ backgroundColor: "var(--ch-navy)" }}
    >
      <div className="ch-shell py-[100px]">
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
            {ticketQueueContent.label}
          </p>
          <div className="relative mt-4 overflow-hidden">
            <div
              className="ch-scanline absolute left-0 top-0 h-[3px] w-1/4"
              style={{ backgroundColor: "rgba(184, 153, 106, 0.08)" }}
              aria-hidden
            />
            <div className="flex flex-col gap-3 pt-1 md:flex-row md:items-end md:justify-between">
              <h2 className="font-display" style={{ fontSize: 42, color: "var(--ch-ivory)" }}>
                {ticketQueueContent.heading}
              </h2>
              <p
                className="text-[14px] italic md:pb-2"
                style={{ color: "rgba(247, 244, 239, 0.5)" }}
              >
                {ticketQueueContent.subheading}
              </p>
            </div>
          </div>
          <div
            className="mt-5 h-px w-full"
            style={{ backgroundColor: "rgba(184, 153, 106, 0.2)" }}
          />
        </motion.div>

        <motion.div
          variants={fadeUpDelayed(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-7 flex flex-wrap gap-2.5"
        >
          {ticketFilters.map((filter) => {
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
                  backgroundColor: isActive ? "var(--ch-gold)" : "rgba(255, 255, 255, 0.05)",
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

        <motion.div layout className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((ticket) => (
              <TicketCard key={ticket.id} data={ticket} />
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
            href="#ticket-queue"
            className="ch-link-underline text-[13px] uppercase"
            style={{ letterSpacing: "0.1em", color: "var(--ch-gold)" }}
          >
            {ticketQueueContent.viewAll}
            <svg className="ml-2 inline" width="16" height="12" viewBox="0 0 16 12" fill="none" aria-hidden>
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

function TicketCard({ data }: { data: (typeof supportTickets)[0] }) {
  const pColor = priorityColor(data.priority);
  const pTint = priorityTint(data.priority);

  return (
    <motion.article
      layout
      variants={cardItem}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      exit={{ opacity: 0, scale: 0.97 }}
      className="flex flex-col transition-colors duration-200"
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
          className="text-[10px] uppercase tabular-nums"
          style={{ letterSpacing: "0.06em", color: "rgba(247, 244, 239, 0.45)" }}
        >
          {data.ticketNumber}
        </span>
        <span
          className="text-[10px] font-semibold uppercase"
          style={{
            letterSpacing: "0.08em",
            color: statusColor(data.status),
          }}
        >
          {data.status}
        </span>
      </div>

      <div className="mt-3 flex items-center justify-between">
        <span
          className="text-[10px] font-semibold uppercase"
          style={{
            letterSpacing: "0.1em",
            color: pColor,
            backgroundColor: pTint,
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
            color: pColor,
            backgroundColor: pTint,
            padding: "3px 10px",
            borderRadius: 999,
          }}
        >
          {data.priority}
        </span>
      </div>

      <h3
        className="mt-3.5 font-display"
        style={{ fontSize: 17, fontWeight: 600, color: "var(--ch-ivory)" }}
      >
        {data.title}
      </h3>

      <p
        className="mt-2 text-[12px]"
        style={{ color: "rgba(247, 244, 239, 0.5)" }}
      >
        {data.requester} · {data.department}
      </p>

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
        <Meta label="Submitted" value={data.submitted} />
        <Meta label="Assignee" value={data.assignee} />
        <Meta label="SLA Left" value={data.slaRemaining} />
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
        >
          View Details
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
        >
          Add Update
        </button>
      </div>
    </motion.article>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-0.5">
      <span
        className="text-[10px] uppercase"
        style={{ letterSpacing: "0.06em", color: "rgba(247, 244, 239, 0.4)" }}
      >
        {label}
      </span>
      <span className="text-[11px]" style={{ color: "rgba(247, 244, 239, 0.8)" }}>
        {value}
      </span>
    </div>
  );
}
