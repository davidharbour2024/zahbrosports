import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: { primary: "#D61D25", "primary-hover": "#B8141B", accent: "#F12631", ink: "#050505", dark: "#111111", charcoal: "#1C1C1E", muted: "#70747A", line: "#303034", "off-white": "#F5F5F3" },
      fontFamily: { display: ["var(--font-oswald)", "sans-serif"], body: ["var(--font-inter)", "sans-serif"] },
    },
  },
  plugins: [],
} satisfies Config;
