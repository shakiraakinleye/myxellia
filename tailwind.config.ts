import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xxs: "0.625rem",
      },
      colors: {
        mainBackground: "var(--mainBackground)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        secondary: {
          background: "var(--secondary-background)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          100: "var(--muted-100)",
          200: "var(--muted-200)",
          300: "var(--muted-300)",
          400: "var(--muted-400)",
        },
        border: {
          100: "var(--border-100)",
          200: "var(--border-200)",
        },
        dark: {
          100: "var(--dark-100)",
          200: "var(--dark-200)",
        },
        chart: {
          blue: "var(--chart-blue)",
          green: "var(--chart-green)",
          teal: "var(--chart-teal)",
          red: "var(--chart-red)",
        },
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        playfair: ["var(--font-playfair)", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
