import('tailwindcss').Config
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {colors: {
      nav_bg:'#F2EAE1',
      user_color:'#FEAF00',
    yellow_400:'#F8D442'}},
    
  },
  plugins: [],
}