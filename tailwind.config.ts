import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "var(--ch-navy)",
        "navy-mid": "var(--ch-navy-mid)",
        "navy-light": "var(--ch-navy-light)",
        slate: "var(--ch-slate)",
        "slate-light": "var(--ch-slate-light)",
        gold: "var(--ch-gold)",
        "gold-muted": "var(--ch-gold-muted)",
        ivory: "var(--ch-ivory)",
        "ch-white": "var(--ch-white)",
        "urgency-low": "var(--ch-urgency-low)",
        "urgency-medium": "var(--ch-urgency-medium)",
        "urgency-high": "var(--ch-urgency-high)",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        shell: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
