/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary : "#FEEB88",
        secondery : "#D9D9D9",
        secondery2 : "#F3F3F3",
        orange : "#f16623",
        primaryGray : "#f16623",
      },
      boxShadow: {
        btnShadow: '-1px 0px 28px 0 white, -12px -9px 20px 0px inset #a5a5a5',
        btnShadowSec: '-1px 0px 28px 0 white',
      },
      backgroundImage: {
        BlueLinearBtn: 'linear-gradient(90deg, rgb(0 94 203) 0%, rgb(7 26 79) 100%)',
      },
      container: {
        center: true,
        screens: {
          'xs': '320px',    // Extra Small devices (mobile)
          'sm': '420px',    // Small devices (large mobile)
          'md': '768px',    // Medium devices (tablets)
          'lg': '1024px',   // Large devices (desktops)
          'xl': '1280px',   // Extra Large devices (large desktops)
          '2xl': '1536px',  // Double Extra Large devices
        },
        padding: {
          DEFAULT: "3rem",
          // mobile: "1rem",
          // tablet: "2rem",
          // desktop: "3rem",
          'xs': '0rem',    // Extra Small devices (mobile)
          'sm': '1rem',    // Small devices (large mobile)
          'md': '2rem',    // Medium devices (tablets)
          'lg': '3rem',   // Large devices (desktops)
          'xl': '3rem',   // Extra Large devices (large desktops)
          '2xl': '3rem',
        },
      },
      fontSize: {
        xsm: '12px',
      }
    },
    
  },
  plugins: [],
}

