"use client";

import {
  itFooterBottom,
  itFooterBrand,
  itFooterColumns,
} from "@/lib/courthouse-it-data";

export function Footer() {
  return (
    <footer
      className="ch-section"
      style={{
        backgroundColor: "var(--ch-navy-mid)",
        borderTop: "1px solid rgba(184, 153, 106, 0.2)",
      }}
    >
      <div style={{ padding: "80px 0" }}>
        <div className="ch-shell">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-4">
            <div className="sm:col-span-2 md:col-span-1">
              <span
                className="font-display font-bold"
                style={{ fontSize: 18, color: "var(--ch-ivory)" }}
              >
                courthouse<span style={{ color: "var(--ch-gold)" }}>.</span>it.com
              </span>
              <p
                className="mt-4 text-[13px]"
                style={{
                  color: "rgba(247, 244, 239, 0.5)",
                  lineHeight: 1.7,
                  maxWidth: 280,
                }}
              >
                {itFooterBrand.description}
              </p>
              <a
                href={itFooterBrand.legalLink}
                className="ch-link-underline mt-4 inline-block text-[12px] uppercase"
                style={{ letterSpacing: "0.08em", color: "var(--ch-gold)" }}
              >
                courthouse.legal →
              </a>
            </div>

            {itFooterColumns.map((column) => (
              <div key={column.heading}>
                <h4
                  className="text-[11px] uppercase"
                  style={{
                    letterSpacing: "0.12em",
                    color: "var(--ch-gold)",
                    marginBottom: 20,
                  }}
                >
                  {column.heading}
                </h4>
                <ul>
                  {column.links.map((link) => (
                    <li key={link} style={{ margin: "10px 0" }}>
                      <a
                        href="#"
                        className="text-[13px] transition-colors duration-200"
                        style={{ color: "rgba(247, 244, 239, 0.55)" }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color = "var(--ch-ivory)")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.color =
                            "rgba(247, 244, 239, 0.55)")
                        }
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div
            className="my-12 h-px w-full"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.08)" }}
          />

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[12px]" style={{ color: "rgba(247, 244, 239, 0.35)" }}>
              {itFooterBottom.left}
            </p>
            <p className="text-[12px]" style={{ color: "rgba(247, 244, 239, 0.35)" }}>
              {itFooterBottom.right}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
