import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#005f73', // Dark cyan for primary buttons and highlights
          light: '#0a9396', // Lighter cyan for hover states
          dark: '#003d5b', // Darker cyan for active states
        },
        secondary: {
          DEFAULT: '#94d2bd', // Soft green for secondary elements
          dark: '#5c9e6f', // Darker shade for secondary element hover states
        },
        background: {
          DEFAULT: '#e9d8a6', // Beige background for lighter areas
          dark: '#ee9b00', // Dark yellow for contrasting backgrounds
        },
        error: '#d62828', // Red for error states and messages
      },
      fontFamily: {
        body: ['Inter', 'sans-serif'], // Main body font
      },
      boxShadow: {
        custom: '0 4px 6px rgba(0, 0, 0, 0.1)', // Custom shadow for elevated elements
      },
    },
  },
  plugins: [],
};
export default config;
