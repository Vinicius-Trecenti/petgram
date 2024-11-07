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
        'branco-custom': '#f1f1f3',
        'verde-custom': '#61a353',
        background: "var(--background)",
        foreground: "var(--foreground)",

      },
    },
  },
  plugins: [],
};
export default config;
