export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        asphalt: "#0F1115",
        panel: "#151922",
        ink: "#C8D0E0",
        muted: "#8B93A7",
        line: "#222633",
        primary: "#12D6CC",
        ok: "#10B981",
        warn: "#F59E0B",
        danger: "#EF4444",
      },
      boxShadow: {
        card: "0 10px 30px -10px rgba(0,0,0,0.45)",
      },
      fontFamily: {
        sans: ["Poppins", "Poppins", "sans-serif"],
      },
    },
  },
};
