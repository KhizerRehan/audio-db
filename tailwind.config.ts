import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      prefix: "audiodb",
      defaultExtendTheme: "light", // default theme to extend on custom themes
      defaultTheme: "light", // default theme from the themes object
      addCommonColors: true, // override common colors (e.g. "blue", "green", "pink").
    }),
  ],
};
export default config;
