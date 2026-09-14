/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cathy: {
          primary: "#D03737",
          secondary: "#100A1C",
          success: "#2F9E44",
          panel: "#17101F",
          border: "#2A2233",
          muted: "#8A8296",
          surface: "#221a2b",
        },
      },
      fontFamily: {
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
        display: ["Space Grotesk", "system-ui", "sans-serif"],
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(208, 55, 55, 0.4)" },
          "50%": { boxShadow: "0 0 20px 4px rgba(208, 55, 55, 0.2)" },
        },
      },
    },
  },
  plugins: [],
};
