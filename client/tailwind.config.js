/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark Blue
        primary: '#3498db',

        // Dark Gray
        secondary: '#2c3e50',

        // Teal
        accent: '#1abc9c',

        // Light Gray
        text: '#ecf0f1',

        // Orange
        warning: '#e67e22',

        // Dark Background
        background: '#1a1a1a',

        // Slightly Lighter Background for Cards
        surface: '#2a2a2a',
      },
      boxShadow: {
        DEFAULT: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
}

