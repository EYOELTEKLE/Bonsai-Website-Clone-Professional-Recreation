/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}',
    'node_modules/v-lazy-image/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors:{
        'greenfuse':'#65816d',
        'headfuse':'#003c2f',
        'advert-color':'#ecf1ec',
        'unique-header':'#005542'
      },
      backgroundImage: {
        'testimony-bg': "url('/assets/banner-bg.png')",
      },
      screens:{
        'ipad-mini':'768px',
        'Galaxy-Fold':'280px',
        'iphone':'375px',
        'ipad-air':'820px',
        'Nesthub':'1024px',
        'Nesthub-max':'1280px',
        'iphone':'375px',
        'surface-duo':'540px',
        'iphone-xr':'414px',
        'galaxy-s8':'360px',
        'screen-collapse':'910px',
        'surface-pro':'912px',
        'laptop':'1920px',
        'mid-laptop':"1366px",
        'tricky':'1371px',
        'tricky-2':'1693px',
        'tricky-3':'2245px'
      },
      plugins: [
        require('flowbite/plugin'),
        require('v-lazy-image')
      ],
    },
   
  },
 
}

