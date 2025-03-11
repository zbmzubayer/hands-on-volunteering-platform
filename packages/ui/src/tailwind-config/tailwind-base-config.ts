import { type Config } from "tailwindcss";

export const tailwindBaseConfig: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "../../packages/ui/src/components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        geistMono: ["var(--font-geist-mono)"],
      },
      fontSize: {
        xxs: ["0.625rem", "0.875rem"],
      },

      colors: {
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
