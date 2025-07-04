/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'mono': ['var(--font-space-mono)', 'monospace'],
        'sans': ['var(--font-space-mono)', 'monospace'],
      },
      colors: {
        'neon-green': '#06FF00',
        'accent-orange': '#d0ff4b',
        'accent-yellow': '#ffc107',
        'dark-green': '#2F4F2F',
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
