/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#0B79BF",
        
"secondary": "#61419c",
        
"accent": "#15d10e",
        
"neutral": "#252837",
        
"base-100": "#f4f4f4",
        
"info": "#afbae9",
        
"success": "#1c8644",
        
"warning": "#f7dc6e",
        
"error": "#ec656b",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

