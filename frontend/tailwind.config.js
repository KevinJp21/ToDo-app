/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // 👇 agrega los colores de Tailwind que usas
        "gray-900": "#111827",
        "gray-700": "#374151",
        "gray-600": "#4B5563",
        indigo: {
          50: "#EEF2FF",
          500: "#6366F1",
          600: "#4F46E5",
        },
        purple: {
          600: "#7C3AED",
          700: "#6D28D9",
        },
        cyan: {
          50: "#ECFEFF",
        },
        white: "#ffffff",
      },
      // 👇 Agrega gradientes si usas `bg-gradient-to-r` o `to-br`
      backgroundImage: {
        "gradient-to-br":
          "linear-gradient(to bottom right, var(--tw-gradient-stops))",
        "gradient-to-r": "linear-gradient(to right, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
