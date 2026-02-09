import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: '#42f5ad',
        'brand-mint': '#42f5ad',
        'brand-grey': '#3a3a3a',
      },
      backgroundColor: {
        'brand': '#42f5ad',
      },
      textColor: {
        'brand': '#3a3a3a',
      },
      borderColor: {
        'brand': '#3a3a3a',
      },
    },
  },
  plugins: [],
};

export default config;
