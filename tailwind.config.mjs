/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],  // example, check your font stack
      },
      backgroundImage: {
        'text-gradient': 'linear-gradient(to right, #ff7448, #ff4848, #6248ff )',
      },
      textShadow: {
        sm: '1px 1px 1px rgba(0,0,0,0.2)',
        lg: '2px 2px 2px rgba(0, 0, 0, 0.3)',
      },
      box:{
        purple:' #6248ff',
      },
    },
  },
  plugins: [],
};
