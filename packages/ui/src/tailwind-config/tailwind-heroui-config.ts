import { type Config } from "tailwindcss";

import { heroui } from "@heroui/theme";

import { tailwindBaseConfig } from "./tailwind-base-config";

export const tailwindHeroUIConfig: Config = {
  content: [...(tailwindBaseConfig.content as string[]), "../../node_modules/@heroui/theme/dist/**/*.js"],
  theme: { ...tailwindBaseConfig.theme },
  darkMode: "class",
  plugins: [
    heroui({
      layout: {
        radius: {
          small: "0.25rem",
          medium: "0.5rem",
          large: "0.75rem",
        },
      },
      prefix: "hanson",
    }),
  ],
};
