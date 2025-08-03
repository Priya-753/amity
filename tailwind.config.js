/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'arabic': ['Noto Sans Arabic', 'sans-serif'],
        'japanese': ['Noto Sans JP', 'sans-serif'],
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-reverse': 'float-reverse 8s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-up-1': 'slideUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s forwards',
        'slide-up-2': 'slideUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s forwards',
        'slide-up-3': 'slideUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.6s forwards',
        'slide-up-4': 'slideUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.8s forwards',
        'typewriter': 'fadeIn 1s cubic-bezier(0.4, 0, 0.2, 1) 1.2s forwards',
        'fade-up-delayed': 'fadeUpDelayed 0.8s cubic-bezier(0.4, 0, 0.2, 1) 1.8s forwards',
        'fade-in-up': 'fadeInUp 1s cubic-bezier(0.4, 0, 0.2, 1) 2.5s forwards',
        'bounce-slow': 'bounce 2s infinite',
        'fade-in': 'fadeIn 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(20px)' },
        },
        slideUp: {
          '0%': { 
            opacity: '0', 
            transform: 'translateY(60px) scale(0.8)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateY(0) scale(1)' 
          },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUpDelayed: {
          '0%': { 
            opacity: '0', 
            transform: 'translateY(30px)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateY(0)' 
          },
        },
        fadeInUp: {
          '0%': { 
            opacity: '0', 
            transform: 'translateY(20px)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateY(0)' 
          },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      dropShadow: {
        '2xl': '0 25px 25px rgb(0 0 0 / 0.5)',
        'lg': '0 10px 8px rgb(0 0 0 / 0.3)',
      },
      perspective: {
        'distant': '1000px',
      },
    },
  },
  plugins: [],
};