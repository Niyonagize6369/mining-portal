// tailwind.config.ts
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',      // Scan all files in the app directory
    './pages/**/*.{js,ts,jsx,tsx}',    // Scan all files in the pages directory (if applicable)
    './components/**/*.{js,ts,jsx,tsx}', // Scan all files in the components directory
  ],
  theme: {
    extend: {
      // Optional: If you want to use the Geist Mono font as a utility (e.g., 'font-mono')
      fontFamily: {
        mono: ['var(--font-geist-mono)'],
        sans: ['var(--font-geist-sans)'],
      },
      // You can also define custom colors from your branding here
      colors: {
        'ngali-yellow': '#f59e0b', // Example based on the mockup's highlight color
      },
    },
  },
  plugins: [],
}