"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import {
  cardItem,
  cardStagger,
  fadeUp,
  fadeUpDelayed,
  viewportOnce,
} from "@/lib/animations";
import { knowledgeArticles } from "@/lib/courthouse-it-data";

export function KnowledgeBase() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return knowledgeArticles;
    return knowledgeArticles.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q) ||
        a.summary.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <section
      id="knowledge-base"
      className="ch-section"
      style={{ backgroundColor: "var(--ch-ivory)" }}
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
            SELF-SERVICE KNOWLEDGE BASE
          </motion.p>
          <motion.h2
            variants={fadeUpDelayed(0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-4 font-display"
            style={{ fontSize: 42, color: "var(--ch-navy)", lineHeight: 1.15 }}
          >
            Resolve Common Issues Instantly
          </motion.h2>
          <motion.p
            variants={fadeUpDelayed(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mx-auto mt-5 max-w-[540px] text-[16px]"
            style={{ color: "var(--ch-slate)", lineHeight: 1.7 }}
          >
            Search curated articles, setup guides, and troubleshooting steps before
            opening a ticket. Most issues are resolved in under five minutes.
          </motion.p>
        </div>

        <motion.div
          variants={fadeUpDelayed(0.35)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto mt-10 max-w-[560px]"
        >
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search knowledge base — VPN, password, software, email…"
            className="ch-field"
            aria-label="Search knowledge base"
          />
        </motion.div>

        <motion.div
          variants={cardStagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((article) => (
            <motion.article
              key={article.id}
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
              <span
                className="text-[10px] font-semibold uppercase"
                style={{
                  letterSpacing: "0.1em",
                  color: "var(--ch-gold)",
                }}
              >
                {article.category}
              </span>
              <h3
                className="mt-3 font-display"
                style={{ fontSize: 18, fontWeight: 600, color: "var(--ch-navy)", lineHeight: 1.35 }}
              >
                {article.title}
              </h3>
              <p
                className="mt-3 text-[14px] line-clamp-2"
                style={{ color: "var(--ch-slate)", lineHeight: 1.6 }}
              >
                {article.summary}
              </p>
              <div
                className="mt-5 flex items-center justify-between border-t pt-4"
                style={{ borderColor: "var(--ch-border)" }}
              >
                <span className="text-[11px]" style={{ color: "var(--ch-slate-light)" }}>
                  {article.readTime} read
                </span>
                <span className="text-[11px]" style={{ color: "var(--ch-slate-light)" }}>
                  {article.views.toLocaleString()} views
                </span>
              </div>
              <button
                type="button"
                className="ch-link-underline mt-4 text-[11px] uppercase"
                style={{ letterSpacing: "0.08em", color: "var(--ch-gold)" }}
              >
                Read Article
              </button>
            </motion.article>
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <p className="mt-10 text-center text-[14px]" style={{ color: "var(--ch-slate)" }}>
            No articles match your search.{" "}
            <a href="#ticket-form" style={{ color: "var(--ch-gold)" }}>
              Submit a support ticket
            </a>{" "}
            instead.
          </p>
        )}
      </div>
    </section>
  );
}
