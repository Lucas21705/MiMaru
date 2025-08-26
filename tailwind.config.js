module.exports = {
  variants: {
    extend: {},
  },
  content: [
    "./components/**/*.{js,vue,ts}",
    "./components/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./pages/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}"
  ],
  theme: {
    extend: {
      colors: {
        dark: 'var(--color-dark)',
        error: 'var(--color-error)',
        brand: {
          DEFAULT: "#7F3FBF", // violeta principal
          light: "#D1B3FF", // violeta claro
        },
      }
    },
    screens: {
      "2xs": "380px",
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      "2lg": "1199px",
      xl: "1280px"
    }
  },
plugins: []
}
