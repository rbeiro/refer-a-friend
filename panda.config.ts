import { defineConfig } from "@pandacss/dev";

import { fontSizes } from "@rbeiro-ui/tokens";

fontSizes;

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/pages/**/*.{ts,tsx,js,jsx}",
    "./src/pages/agendamento/**/*.{ts,tsx,js,jsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    keyframes: {
      slideIn: {
        from: { transform: "translateY(-100%)" },
        to: { transform: "translateY(0%)" },
      },
      slideOut: {
        from: { transform: "translateY(0%)" },
        to: { transform: "translateY(-100%)" },
      },
    },
    tokens: {
      colors: {
        primary: { value: "#4EA8DE" },
        loContrast: { value: "var(--color-gray1)" },
        hiContrast: { value: "var(--color-gray12)" },
        gray: {
          "1": { value: "var(--color-gray1)" },
          "2": { value: "var(--color-gray2)" },
          "3": { value: "var(--color-gray3)" },
          "4": { value: "var(--color-gray4)" },
          "5": { value: "var(--color-gray5)" },
          "6": { value: "var(--color-gray6)" },
          "7": { value: "var(--color-gray7)" },
          "8": { value: "var(--color-gray8)" },
          "9": { value: "var(--color-gray9)" },
          "10": { value: "var(--color-gray10)" },
          "11": { value: "var(--color-gray11)" },
          "12": { value: "var(--color-gray12)" },
          "100": { value: "#e1e1e6" },
          "200": { value: "#a9a9b2" },
          "400": { value: "#7c7c8a" },
          "500": { value: "#505059" },
          "600": { value: "#323238" },
          "700": { value: "#29292e" },
          "800": { value: "#202024" },
          "900": { value: "#121214" },
        },
        error: {
          background: { value: "var(--color-red1)" },
          border: { value: "var(--color-red7)" },
          color: { value: "var(--color-red11)" },
        },
        success: {
          background: { value: "var(--color-grass1)" },
          border: { value: "var(--color-grass7)" },
          color: { value: "var(--color-grass11)" },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",

  jsxFramework: "react",
});
