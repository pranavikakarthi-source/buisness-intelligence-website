/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0b192c',
          navy: '#0f172a',
          blue: '#1f6fb2',
          'blue-hover': '#185a92',
          teal: '#2ec4b6',
          'teal-light': '#eef8fb',
          muted: '#556987',
          border: '#e2e8f0',
          card: '#ffffff',
          bg: '#f8fafc',
          'bg-subtle': '#f0f7fd',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['Space Grotesk', 'monospace'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #1f6fb2 0%, #2ec4b6 100%)',
        'brand-gradient-h': 'linear-gradient(90deg, #1f6fb2 0%, #2ec4b6 100%)',
      },
    },
  },
  plugins: [],
}
