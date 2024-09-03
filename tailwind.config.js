/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontSize: {
        '7.5xl': '5rem'
      },
      screens: {
        'md-900': '900px',
        'md-1024': '1024px'
      },
      colors: {
        primary: "#fea928",
        secondary: "#ed8900"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem"
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

