/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Soft Blue
        primary: '#007BFF',

        // Soft Gray
        secondary: '#F5F5F5',

        // Light Green
        accent: '#28A745',

        // Dark Gray
        text: '#333333',

        // Light Red
        warning: '#FF6B6B',
      },
    },
  },
  plugins: [],
}

