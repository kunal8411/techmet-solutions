import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        '[#0A0A29]': '#0A0A29',
        '[#4B5AFF]': '#4B5AFF',
        '[#3A48E3]': '#3A48E3',
      },
    },
  },
  plugins: [],
} satisfies Config;
