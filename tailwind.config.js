/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          950: '#030712',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'float-slow': 'floatSlow 14s ease-in-out infinite',
        'float-reverse': 'float 11s ease-in-out infinite reverse',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite alternate',
        'gradient-x': 'gradientX 6s ease infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'spin': 'spin 1s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-40px) rotate(6deg)' },
          '66%': { transform: 'translateY(-20px) rotate(-4deg)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-60px)' },
        },
        glowPulse: {
          from: { opacity: '0.2', transform: 'scale(0.95)' },
          to: { opacity: '0.55', transform: 'scale(1.05)' },
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        spin: {
          to: { transform: 'rotate(360deg)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
