/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        geist: ["Geist", 'serif'],
        geistMono: ["GeistMono", 'serif'],
      },
      fontWeight: {
        light: 300,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      textDecorationColor: ['responsive', 'hover', 'focus'],
      textDecorationThickness: ['responsive', 'hover', 'focus'],
      textUnderlineOffset: ['responsive', 'hover', 'focus'],
    },
    variants: {
      extend: {
        textDecoration: ['hover', 'focus'],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
