/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#07080b', // main body
          900: '#0d0f15', // cards / panels
          850: '#13161f', // card hover / elevated
          800: '#1b1f2b', // active tabs / borders
          700: '#282e3f', // borders
        },
        titanium: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
        },
        tactic: {
          amber: '#f59e0b',
          blue: '#3b82f6',
          emerald: '#10b981',
          crimson: '#ef4444'
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'SF Mono', 'Roboto Mono', 'Menlo', 'monospace'],
      },
    },
  },
  plugins: [],
};
