/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Slate blue from the dark bands in the screenshot
        slate1: {
          50: '#F4F5F7',
          100: '#E4E7EC',
          200: '#C7CDD6',
          400: '#7A8694',
          500: '#5C6A7A',
          600: '#475563',
          700: '#3B4754',
          800: '#2F3A45',
          900: '#263038',
        },
        brand: {
          DEFAULT: '#E85A14',
          50: '#FFF1E8',
          100: '#FFDDC7',
          400: '#F5894F',
          500: '#E85A14',
          600: '#C74A0E',
          700: '#9A380B',
        },
        // cream / off-white card backgrounds visible in service cards
        cream: {
          50: '#FFF8F2',
          100: '#FCEFE3',
          200: '#F7E0CC',
        },
        ink: '#1B1F24',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        script: ['"Comic Neue"', 'Caveat', 'cursive'],
      },
      maxWidth: {
        page: '1280px',
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeR: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        marquee: 'marquee 32s linear infinite',
        marqueeR: 'marqueeR 36s linear infinite',
      },
    },
  },
  plugins: [],
};
