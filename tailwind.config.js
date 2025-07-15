/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f7ff',
          100: '#bae7ff',
          200: '#91d5ff',
          300: '#69c0ff',
          400: '#40a9ff',
          500: '#1890ff',
          600: '#096dd9',
          700: '#0050b3',
          800: '#003a8c',
          900: '#002766',
          DEFAULT: '#00B0FF'
        },
        accent: {
          50: '#fffbe6',
          100: '#fff1b8',
          200: '#ffe58f',
          300: '#ffd666',
          400: '#ffc53d',
          500: '#faad14',
          600: '#d48806',
          700: '#ad6800',
          800: '#874d00',
          900: '#613400',
          DEFAULT: '#F7FF00'
        },
        navy: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#243b53',
          900: '#102a43',
          950: '#001E3C',
          DEFAULT: '#002E55'
        }
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'inter-tight': ['Inter Tight', 'sans-serif'],
        'orbitron': ['Orbitron', 'monospace']
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'gradient': 'gradient 15s ease infinite',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%': { boxShadow: '0 0 20px rgba(0, 176, 255, 0.4)' },
          '100%': { boxShadow: '0 0 40px rgba(0, 176, 255, 0.8)' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        'gradient': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        },
        'marquee': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' }
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/typography')
  ],
  daisyui: {
    themes: [
      {
        dark: {
          "primary": "#00B0FF",
          "secondary": "#F7FF00", 
          "accent": "#00D3FF",
          "neutral": "#002E55",
          "base-100": "#001E3C",
          "base-200": "#021131",
          "base-300": "#102a43",
          "info": "#00B0FF",
          "success": "#00ff88",
          "warning": "#F7FF00",
          "error": "#ff4757",
        },
      },
    ],
  },
};