/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "#131316",
        "primary-shade": "#242429",
        "secondary": "#f1f2f4",
        "tertiary": "#9d9fa8",
        "accent": "#0ea5e9",
        "accent-shade": "#7dd3fc",
        "cream": "#f8fafc",
        "navy": "#1e293b",
      },
    },
  },
  plugins: [],
};
