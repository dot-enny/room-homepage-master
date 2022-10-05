/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        main: ['']
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.75rem' }],
      },
      colors: {
        'primary': {
          100: 'hsl(0, 0%, 63%)',
          200: 'hsl(0, 0%, 27%)',
        },
      }

    },
  },
  plugins: [],
}
