import { type Config } from "tailwindcss";

export const tailwindBaseConfig: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        geistMono: ["var(--font-geist-mono)"],
      },
      fontSize: {
        xxs: ["0.625rem", "0.875rem"],
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
