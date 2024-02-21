import { info } from "console";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      zIndex: {
        negative: "-1",
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#2703c7",
          secondary: "#037fc7",
          accent: "#BFE7FE",
          info: "#8903c7",
        },
      },
      {
        night: {
          ...require("daisyui/src/theming/themes")["night"],
          accent: "#121212",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
