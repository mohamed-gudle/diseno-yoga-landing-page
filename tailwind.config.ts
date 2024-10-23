import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode:'selector',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-primary': 'linear-gradient(90deg, #FF52F8 0%, #9F53FF 100%)',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'primary': 'linear-gradient(90deg, #FF52F8 0%, #9F53FF 100%)',
        'secondary':'#1E0849',
        'title':'#220953',
        'background-dark':'#14092A',
        'title-dark':'#D1C0F1',
        'text-dark':'#A094B8',
        "first-color-light":'#E5D9FD'
      },
    },
  },
  plugins: [],
};
export default config;
