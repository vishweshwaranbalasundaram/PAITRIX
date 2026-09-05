import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#0A0A0C",
        surface: "#121317",
        "surface-2": "#181A1F",
        hairline: "#232529",
        "text-1": "#F2F1ED",
        "text-2": "#9A9CA3",
        "text-3": "#5D5F66",
        accent: "#E3A15D",
        "accent-dim": "#7A5B36",
        pass: "#4ADE80",
        warn: "#FBBF24",
        block: "#F87171",
        info: "#8B9AAE",
      },
      fontFamily: {
        display: ["Satoshi", "sans-serif"],
        body: ["Satoshi", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      keyframes: {
        scrolldown: {
          "0%": { top: "-100%" },
          "50%": { top: "0%" },
          "100%": { top: "100%" },
        },
        pulsering: {
          "0%": { transform: "scale(0.9)", opacity: "0.8" },
          "100%": { transform: "scale(1.5)", opacity: "0" },
        },
      },
      animation: {
        scrolldown: "scrolldown 1.8s ease-in-out infinite",
        pulsering: "pulsering 2.6s ease-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
