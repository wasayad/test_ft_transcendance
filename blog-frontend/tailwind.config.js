module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {
       spacing:{
         pr: '1px',
         center:'25%',
         actuality:'50%',
         '4/5':'80%', '2.5%':'2.5%', '1%':'1%','2%':'2%','3%':'3%','4%':'4%','5%':'5%','5.5%':'5.5%','10%':'10%','15%':'15%','18%':'18%','20%':'20%','25%':'25%','30%':'30%','35%':'35%','40%':'40%','60%':'60%', '67.5%':'67.5%', '70%':'70%','75%':'75%','80%':'80%','90%':'90%','98%':'98%','97%':'97%','96%':'96%','95%':'95%',
       },
      borderRadius: {
        Actuality: '1.25rem',
      },
      colors: {
        'gold': {
          DEFAULT: '#FFCF88',
        },
        'Banner': {
          DEFAULT: '#3D3D3D',
        },
        'LiGreen': {
          DEFAULT: '#14FF00'
        },
        'BoxActuality': '#C4C4C4',
        'HoverM': '#887558',
      },
      animation: ['hover', 'focus'],
   },
  },
   variants: {
     extend: {},
   },
   plugins: [
    require('tailwind-scrollbar-hide')
  ]
}