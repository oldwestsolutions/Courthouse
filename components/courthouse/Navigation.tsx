"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { navItems } from "@/lib/courthouse-data";

function Wordmark({ size = 20 }: { size?: number }) {
  return (
    <span
      className="font-display font-bold tracking-tight text-ivory"
      style={{ fontSize: size }}
    >
      courthouse<span style={{ color: "var(--ch-gold)" }}>.</span>legal
    </span>
  );
}

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;

      if (currentY <= 72) {
        setVisible(true);
      } else if (currentY > lastScrollY.current + 8) {
        setVisible(false);
        setOpen(false);
      } else if (currentY < lastScrollY.current - 8) {
        setVisible(true);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -8 }}
      animate={{
        opacity: visible || open ? 1 : 0,
        y: visible || open ? 0 : "-100%",
      }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50"
      style={{
        backgroundColor: "var(--ch-navy)",
        borderBottom: "1px solid rgba(184, 153, 106, 0.25)",
      }}
    >
      <nav className="ch-shell flex h-[60px] items-center justify-between md:h-[72px]">
        <a href="#top" className="flex items-center" aria-label="courthouse.legal home">
          <Wordmark />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-7">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-[13px] transition-colors duration-200"
                  style={{ color: "rgba(247, 244, 239, 0.75)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--ch-ivory)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(247, 244, 239, 0.75)")
                  }
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <GhostNavButton>Log In</GhostNavButton>
            <FilledNavButton>Submit a Case</FilledNavButton>
          </div>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center md:hidden"
        >
          <span className="relative block h-3 w-5">
            <span
              className="absolute left-0 top-0 h-[1.5px] w-5 transition-all duration-300"
              style={{
                backgroundColor: "var(--ch-gold)",
                transform: open ? "translateY(5px) rotate(45deg)" : "none",
              }}
            />
            <span
              className="absolute bottom-0 left-0 h-[1.5px] w-5 transition-all duration-300"
              style={{
                backgroundColor: "var(--ch-gold)",
                transform: open ? "translateY(-5px) rotate(-45deg)" : "none",
              }}
            />
          </span>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden md:hidden"
            style={{
              backgroundColor: "var(--ch-navy-mid)",
              borderTop: "1px solid rgba(184, 153, 106, 0.15)",
            }}
          >
            <div className="ch-shell flex flex-col gap-1 py-5">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-[44px] items-center text-[14px]"
                  style={{ color: "rgba(247, 244, 239, 0.8)" }}
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-4 flex flex-col gap-3">
                <GhostNavButton full>Log In</GhostNavButton>
                <FilledNavButton full>Submit a Case</FilledNavButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function GhostNavButton({
  children,
  full,
}: {
  children: React.ReactNode;
  full?: boolean;
}) {
  return (
    <button
      type="button"
      className={`min-h-[44px] rounded-[3px] text-[12px] font-normal uppercase transition-colors duration-200 ${
        full ? "w-full" : ""
      }`}
      style={{
        letterSpacing: "0.08em",
        border: "1px solid rgba(184, 153, 106, 0.4)",
        color: "var(--ch-gold)",
        padding: "8px 20px",
        backgroundColor: "transparent",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.backgroundColor = "rgba(184, 153, 106, 0.08)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.backgroundColor = "transparent")
      }
    >
      {children}
    </button>
  );
}

function FilledNavButton({
  children,
  full,
}: {
  children: React.ReactNode;
  full?: boolean;
}) {
  return (
    <button
      type="button"
      className={`min-h-[44px] rounded-[3px] text-[12px] font-semibold uppercase transition-colors duration-200 ${
        full ? "w-full" : ""
      }`}
      style={{
        letterSpacing: "0.08em",
        backgroundColor: "var(--ch-gold)",
        color: "var(--ch-navy)",
        padding: "9px 22px",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.backgroundColor = "var(--ch-gold-muted)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.backgroundColor = "var(--ch-gold)")
      }
    >
      {children}
    </button>
  );
}
