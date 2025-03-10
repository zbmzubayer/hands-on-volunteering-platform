import type { Config } from "tailwindcss";

import { tailwindHeroUIConfig } from "@handson/ui/tailwind-config";

export default {
  content: [...(tailwindHeroUIConfig.content as string[])],
  theme: {
    ...tailwindHeroUIConfig.theme,
  },
  darkMode: tailwindHeroUIConfig.darkMode,
  plugins: [...tailwindHeroUIConfig.plugins!],
} satisfies Config;
