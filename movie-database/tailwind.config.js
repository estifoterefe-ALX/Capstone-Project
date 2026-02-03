/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          "primary": "#d9a809",
          "background-light": "#f8f8f5",
          "background-dark": "#0B0B0B",
        },
        fontFamily: {
          "display": ["Be Vietnam Pro", "sans-serif"]
        },
        borderRadius: {
          "DEFAULT": "0.25rem",
          "lg": "0.5rem",
          "xl": "0.75rem",
          "full": "9999px"
        },
      },
    },
    plugins: [],
  }