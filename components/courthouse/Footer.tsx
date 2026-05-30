"use client";

import {
  footerBottom,
  footerBrand,
  footerColumns,
} from "@/lib/courthouse-data";

function SocialLink({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href="#"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center transition-colors duration-200"
      style={{ color: "rgba(247, 244, 239, 0.4)" }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.color = "rgba(184, 153, 106, 0.9)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.color = "rgba(247, 244, 239, 0.4)")
      }
    >
      {children}
    </a>
  );
}

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
            {/* Brand column */}
            <div className="sm:col-span-2 md:col-span-1">
              <span
                className="font-display font-bold"
                style={{ fontSize: 18, color: "var(--ch-ivory)" }}
              >
                courthouse
                <span style={{ color: "var(--ch-gold)" }}>.</span>legal
              </span>
              <p
                className="mt-4 text-[13px]"
                style={{
                  color: "rgba(247, 244, 239, 0.5)",
                  lineHeight: 1.7,
                  maxWidth: 280,
                }}
              >
                {footerBrand.description}
              </p>
              <div className="mt-5 flex gap-1">
                <SocialLink label="LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C20.7 8.65 22 10.9 22 14.1V21h-4v-6.1c0-1.45-.03-3.3-2-3.3-2 0-2.3 1.57-2.3 3.2V21H9V9Z" />
                  </svg>
                </SocialLink>
                <SocialLink label="Twitter">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M18.9 2H22l-7.5 8.6L23.3 22h-6.9l-5.4-7-6.2 7H1.6l8-9.2L.9 2h7l4.9 6.5L18.9 2Zm-1.2 18h1.9L7.4 4H5.4l12.3 16Z" />
                  </svg>
                </SocialLink>
              </div>
            </div>

            {/* Link columns */}
            {footerColumns.map((column) => (
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
            <p
              className="text-[12px]"
              style={{ color: "rgba(247, 244, 239, 0.35)" }}
            >
              {footerBottom.left}
            </p>
            <p
              className="text-[12px]"
              style={{ color: "rgba(247, 244, 239, 0.35)" }}
            >
              {footerBottom.right}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
