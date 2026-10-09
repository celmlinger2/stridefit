import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand orange — from the original StrideFit branding
        brand: {
          50: "#FDF4EE",
          100: "#FAE6D7",
          200: "#F5C9AC",
          300: "#F0A37A",
          400: "#EE8352",
          500: "#EF7143",
          600: "#D95D39",
          700: "#B34A2E",
          800: "#8C3A26",
          900: "#6E2F20",
          950: "#3C1A12",
        },
        // Dark navy — solid buttons, dark panels, footer
        navy: {
          700: "#2A3658",
          800: "#232E4E",
          900: "#1C2540",
          950: "#131720",
        },
        cream: "#FDFAF4",
        sand: "#F6F2EC",
        card: "#FEFDFB",
        ink: "#131720",
        muted: "#616875",
        line: "#E9E4DD",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
