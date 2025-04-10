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
        'dark-bg': '#0a0a0a',
        'foreground': '#00ff41',
        'accent-primary': '#ff00ff',
        'accent-secondary': '#00ffff',
        'accent-tertiary': '#ffff00',
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(90deg, rgba(0, 255, 65, 0.1) 1px, transparent 1px), linear-gradient(rgba(0, 255, 65, 0.1) 1px, transparent 1px)',
        'cyber-gradient': 'linear-gradient(45deg, var(--accent-secondary), var(--accent-primary))',
      },
      backgroundSize: {
        'grid': '20px 20px',
      },
      boxShadow: {
        'neon': '0 0 5px #00ffff, 0 0 10px #00ffff',
        'neon-pink': '0 0 5px #ff00ff, 0 0 10px #ff00ff',
        'neon-green': '0 0 5px #00ff41, 0 0 10px #00ff41',
      },
      animation: {
        'flicker': 'flicker 2s linear infinite',
        'glitch': 'glitch 1s linear infinite',
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': { opacity: 1 },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': { opacity: 0.4 },
        },
      },
      fontFamily: {
        'cyber': ['Share Tech Mono', 'monospace'],
      },
    },
  },
  plugins: [],
} 