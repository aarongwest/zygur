/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'neon-green': '#06FF00',
        'accent-orange': '#d14900',
        'accent-yellow': '#ffc107',
        'dark-green': '#0a1e15',
      },
      keyframes: {
        loader: {
          '0%, 100%': {
            opacity: '0.2',
            transform: 'scale(0.75)',
          },
          '50%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
      },
    },
  },
  plugins: [],
}
