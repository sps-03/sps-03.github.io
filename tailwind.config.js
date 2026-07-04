/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "#171717",
        "primary-shade": "#262626",
        "secondary": "#e5e5e5",
        "tertiary": "#a3a3a3",
        "accent": "#0ea5e9",
        "accent-shade": "#7dd3fc",
        "cream": "#f8fafc",
        "navy": "#1e293b",
      },
    },
  },
  plugins: [],
};
