/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          beige: '#F9EBDC',
          coralRed: '#F35059',
          darkRed: '#D33440',
          panther: '#212123',
          mediterranean: '#A6DAD5'
        },
        supportDetails: {
          mediterranean: '#A6DAD5',
          depthSea: '#018EA1',
          gold: '#EFA517',
        },
        opacity: {
          panther75: '#59595A',
          panther50: '#909091',
          darkRed75: '#DE6770',
          darkRed50: '#E99AA0',
          darkRed25: '#F4CCCF',
        },
        basics: {
          black: '#000000',
          darkGray: '#4D4D4D',
          mediumGray: '#BEBEBE',
          lightGray: '#D9D9D9',
          extraLightGray: '#EEEEEE',
          almostWhite: '#FAFAFA',
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        geist: ["Geist", 'serif'],
        geistMono: ["GeistMono", 'serif'],
        IBMPlexMono: ["IBMPlexMono", 'monospace'],
      },
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
      fontSize: {
        h1L: ['4.5rem', { lineHeight: '1' }],
        h1M: ['3.75rem', { lineHeight: '1' }],
        h2: ['3rem', { lineHeight: '1' }],
        h3: ['1.5rem', { lineHeight: '1' }],
        h4: ['1.125rem', { lineHeight: '1' }],
        h5: ['0.875rem', { lineHeight: '1' }],
        h6: ['0.625rem', { lineHeight: '1' }],
      },
      perspective: {
        none: '0',
        sm: '600px',
        md: '800px',
        lg: '1000px',
        xl: '1200px',
      },
      perspectiveOrigin: {
        center: 'center',
        top: 'top',
        'top-left': 'top left',
        'top-right': 'top right',
        bottom: 'bottom',
        'bottom-left': 'bottom left',
        'bottom-right': 'bottom right',
      },
      keyframes: {
        portalEntrance: {
          '0%': { opacity: '0', transform: 'scale(0.5) translateZ(-150px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateZ(0)' },
        },
        carousel: {
          '0%': { transform: 'translateX(225px) rotateY(-15deg) translateZ(-200px) scale(0)', zIndex: '-1', opacity: '0' },
          '25%': { transform: 'translateX(400px) rotateY(-15deg) translateZ(-300px) scale(0.7)', zIndex: '-1', opacity: '1' },
          '50%': { transform: 'translateX(0) rotateY(0deg) translateZ(0) scale(1)', zIndex: '1', opacity: '1' },
          '75%': { transform: 'translateX(-400px) rotateY(15deg) translateZ(-200px) scale(0.7)', zIndex: '-1', opacity: '1' },
          '100%': { transform: 'translateX(-225px) rotateY(-15deg) translateZ(-200px) scale(0)', zIndex: '-1', opacity: '0' },
        },
        flowCarousel: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)', }
        }
      },
      animation: {
        portalEntrance: 'portal-entrance 3s ease infinite',
        loading: 'loading 10s linear infinite',
      },
      transitionDelay: {
        '0ms': '0ms',
        '200ms': '200ms',
        '400ms': '400ms',
        '600ms': '600ms',
      },
      screens: {
        '3xl': '1920px'
      },

    },
  },
};
