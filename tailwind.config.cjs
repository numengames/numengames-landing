/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["geist", 'sans-serif'],
        mono: ["geist", 'serif'],
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
