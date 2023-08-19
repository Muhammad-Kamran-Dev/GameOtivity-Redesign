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
        "electric-blue-900": "#9BFCEB",
        "orange-reward": "#EEA00C",
        "dark-purple": "#19008bf7",
      },

      backgroundImage: {},
      transitionProperty: {
        width: "width",
        transform: "transform",
        fill: "fill",
      },
      screens: {
        xsmb: "320px",
      },
    },
  },
  plugins: [],
};
export default config;
