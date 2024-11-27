module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1220px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
    extend: {
      colors: {
        "primary-accent": {
          50: "#FEFFF7",
          100: "#FDFFF2",
          200: "#F9FFDE",
          300: "#F3FCC7",
          400: "#E7FCA2",
          500: "#d8fb78",
          600: "#BAE060",
          700: "#8EBA43",
          800: "#6A962C",
          900: "#477019",
          950: "#27470A",
        },
      },
    },
  },
  plugins: [],
};
