/** @type {import('tailwindcss').Config} */
module.exports={
 content: ['public/index.html'],
 theme:{
  extend: {
    colors: {
      "transparent": "transparent",
      "current": "currentColor",
     "testpurple": "#5267df",
      "testred": "#ef4444",
      "test-blue": "#242A45",
      "test-gray": "#9194A2",
      "test-white": "#f7f7f7",
    },
  },
  fontfamily: {
    Poppins: ["Poppins, sans-serif"],
  },
  container: {
    center: true,
    padding: '1rem',
    screens: {
      lg: "1124px",
      xl: "1124px",
      "2xl": "1124px",
    },
  },
},
 plugins: [],
}
