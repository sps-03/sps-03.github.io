/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-light": "#f8fafc",
        "primary-shade-light": "#f1f5f9",
        "secondary-light": "#1e293b",
        "tertiary-light": "#64748b",
        "accent-light": "#ef4444",
        "accent-shade-light": "#f87171",

        "primary-dark": "#171717",
        "primary-shade-dark": "#262626",
        "secondary-dark": "#e5e5e5",
        "tertiary-dark": "#a3a3a3",
        "accent-dark": "#0ea5e9",
        "accent-shade-dark": "#7dd3fc",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
