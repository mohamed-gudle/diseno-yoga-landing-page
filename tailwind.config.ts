import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
      },
    },
  },
  plugins: [],
};
export default config;
