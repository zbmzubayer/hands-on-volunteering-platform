/**
 * @type {import("prettier").Options}
 * @type {import("prettier").Config}
 */
export default {
  bracketSpacing: true,
  bracketSameLine: true,
  singleQuote: false,
  jsxSingleQuote: false,
  trailingComma: "es5",
  semi: true,
  printWidth: 110,
  arrowParens: "always",
  endOfLine: "auto",
  importOrder: [
    "<THIRD_PARTY_MODULES>",
    "^@(?!heroui)(?!handson)[^/](.*)$", // all started with @ but not @/, @heroui, @handson
    "^@(handson)/(.*)$",
    "^@/(?!components)(?!providers)(.*)$", // all started with @/ but not @/components and @/providers
    "^@/providers/(.*)$", // providers
    "^@heroui(.*)$", // heroui
    "^@/components/(.*)$",
    "^@/styles/(.*)$", // styles
    "^@(server|trpc)/(.*)$",
    "^~/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    /**
     * **NOTE** tailwind plugin must come last!
     * @see https://github.com/tailwindlabs/prettier-plugin-tailwindcss#compatibility-with-other-prettier-plugins
     */
    "prettier-plugin-tailwindcss",
  ],
  tailwindFunctions: ["cva"],
};
