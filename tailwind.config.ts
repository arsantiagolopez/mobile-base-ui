import type { Config } from "tailwindcss";

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/screens/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000",
        secondary: "#1e1e1e",
        tertiary: "#939393",
        placeholder: "#666666",
        brand: "#7adfd6",
        brandHover: "#57ada3",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      height: {
        nav: "var(--navHeight)",
      },
      keyframes: {
        "overlay-show": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "100%",
          },
        },
        "content-show": {
          from: {
            opacity: "0",
            inset: "20rem",
          },
          to: {
            opacity: "1",
            inset: "3rem",
          },
        },
        fade: {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
        "scale-fade": {
          from: {
            opacity: "0",
            transform: "scale(0.75)",
          },
          to: {
            opacity: "1",
            transform: "scale(1)",
          },
        },
      },
      animation: {
        "overlay-show": "overlay-show 200ms cubic-bezier(0.15, 1, 0.5, 1)",
        "content-show": "content-show 200ms cubic-bezier(0.15, 1, 0.5, 1)",
        fade: "fade 200ms ease-in-out",
        "scale-fade": "scale-fade 200ms ease-in-out",
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
