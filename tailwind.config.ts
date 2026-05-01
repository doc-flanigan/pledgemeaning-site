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
        midnight: "#0f1420",
        "midnight-mid": "#171e2e",
        amber: {
          DEFAULT: "#ff9c00",
          dark: "#cc7d00",
        },
        cream: "#f5f0e8",
        muted: "#7a8099",
      },
    },
  },
  plugins: [],
};
export default config;
