/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        custumBlue: "#282F39",
      },
      gradientColorStops:{
        gradientCustum: "linear-gradient(58deg, #FFF 31%, rgba(255, 255, 255, 0.29) 118.91%)"
      },
      backgroundImage:{
        customCadastroImg: "url(./src/assets/cadastro.png)",
        customLoginImg: "url(./src/assets/alilcacl.png)"
      }
    }
  },
  plugins: [],
}

