/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        black_custom1: "#1D1D1B",
        black_custom2: "#242526",
        black_custom3: "#3A3B3C",
        whit_custom1: "#EDEDED",
        whit_custom2: "#B0B3B8",
      },
      gradientColorStops:{
        gradientCustum: "linear-gradient(58deg, #FFF 31%, rgba(255, 255, 255, 0.29) 118.91%)"
      },
      backgroundImage:{
        customCadastroImg: "url(./src/assets/cadastro.png)",
        customLoginImg: "url(./src/assets/alilcacl.jpg)"
      }
    }
  },
  plugins: [],
}

