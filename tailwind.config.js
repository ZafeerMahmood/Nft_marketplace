/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    screens: {
        'sm': {'min': '640px', 'max': '767px'},
        'md': {'min': '768px', 'max': '1023px'},
        'lg': {'min': '1024px', 'max': '1279px'},
        'xl': {'min': '1280px', 'max': '1535px'},
        '2xl': {'min': '1536px'},
      },
    extend: {
        screens: {
            'xs': {'min': '320px', 'max': '639px'},
            'xss': {'min': '0px', 'max': '319px'}
          },
        colors: {
            primary: "#D9D9D9",
            secondary: "#FFFFFF",
            tertiary: "#4e4e4e",
            quaternary: "#e5e5e5",
            quinary: "#2F2F2F",
            border: "#444444",
            searchBar: "#b0a2a2cc",
            searchBar2: "#636262",
            Button: "#5FA8A3",
            FieldInput: "#2F2F2F",
            loginScreem: "#3f3f3f"
        },
        fontFamily: {
            primary: ["Montserrat", "sans-serif"],
            secondary: ["Inter", "sans-serif"],
        },
    },
},
darkMode: "class",
plugins: [require("daisyui")],
}
