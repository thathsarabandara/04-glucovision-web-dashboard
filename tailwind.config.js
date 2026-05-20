/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0F172A',
          darker: '#020617',
          light: '#F7FAFC',
          accent: '#2563EB',      // Primary Blue
          secondary: '#60A5FA',   // Secondary Blue
          teal: '#14B8A6',        // Accent Teal
          success: '#22C55E',     // Success (healthy)
          warning: '#F59E0B',     // Warning
          danger: '#EF4444',      // Danger (glucose alert)
          textPrimary: '#0F172A',
          textSecondary: '#475569',
        },
        glass: {
          white: 'rgba(255, 255, 255, 0.1)',
          black: 'rgba(0, 0, 0, 0.2)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(0,0,0,0.08)',
        'glass': '0 8px 32px 0 rgba(13, 148, 136, 0.05)',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}

