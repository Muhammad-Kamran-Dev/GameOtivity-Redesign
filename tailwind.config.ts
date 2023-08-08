import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {},
      backgroundImage: {},
      transitionProperty: {
        width: "width",
        transform: "transform",
        fill: "fill"
      }
    }
  },
  plugins: []
};
export default config;
