/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'qp-primary': 'var(--primary)',
        'qp-secondary': 'var(--secondary)',
        'qp-tertiary': 'var(--tertiary)',
        'qp-quaternary': 'var(--quaternary)',
      },
      fontFamily: {
        amatic: ['"Amatic SC"', 'sans-serif'],
        nunito: ['"Nunito"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

