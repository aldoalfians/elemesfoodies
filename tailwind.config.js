const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/containers/**/*.{js,ts,jsx,tsx}',
    './src/data/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Rubik', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        'heading-1': '48px',
        'heading-2': '36px',
        'heading-3': '24px',
        'heading-4': '18px',
        'heading-5': '14px',
        'heading-6': '12px',
      },
      colors: {
        primary: {
          green: '#8BAC3E',
          ocean: '#40A2B1',
          blue: '#405EB6',
          violet: '#B23F74',
          moss: '#A4B441',
          lightMoss: '#C9D9A4',
        },
        secondary: {
          green: '#F0FEEB',
          ocean: '#E6F3F5',
          blue: '#EAEEFA',
          violet: '#F9EEF3',
          moss: '#F3F7D9',
        },
        white: '#FFFFFF',
        black: '#000000',
        gray: '#757575',
        light: '#F2F2F2',
        dark: '#333333',
      },
    },
  },
  variants: {
    extend: {
      display: ['group-focus'],
      opacity: ['group-focus'],
      inset: ['group-focus'],
    },
  },
  plugins: [],
}
