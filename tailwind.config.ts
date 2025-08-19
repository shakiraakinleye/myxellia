import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
        },
        border: {
          100: "var(--border-100)",
          200: "var(--border-200)",
        }
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
