module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {
      height:{
         gl:'28rem',
         xl:'33rem'
       },
       width:{
        gl:'28rem',
        xl:'33rem',
        xxl:'38rem'
      },
       fontSize:{
        xlg:'20rem',
        sem:'15rem'
      },
      fontFamily: {
			head: [ 'Dancing Script', 'Arial', 'sans-serif' ],
			body: [ 'Imbue', 'Arial', 'sans-serif' ],
			cookie: [ 'Cookie', 'Arial', 'sans-serif' ],
			Poppins: [ 'Poppins', 'Arial', 'sans-serif' ],
    },
    rotate:{
      '195':'195deg'
    },
     },
   
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }