import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        '2xl': '1536px',
        '3xl': '1920px',
      },
      spacing: {
        '171.5': '42.875rem',
        '187.5': '46.875rem',
      },
      maxWidth: {
        '1390': '86.875rem',
      },
      padding: {
        '35': '8.75rem',
        '59': '14.75rem',
        '7.5': '1.875rem',
      },
      fontSize: {
        'title-xxl': ['44px', '55px'],
      },
      boxShadow: {
        '1': '0px 4px 8px rgba(0, 0, 0, 0.1)',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        '[#0A0A29]': '#0A0A29',
        '[#4B5AFF]': '#4B5AFF',
        '[#3A48E3]': '#3A48E3',
        primary: '#4A6CF7',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
} satisfies Config;
