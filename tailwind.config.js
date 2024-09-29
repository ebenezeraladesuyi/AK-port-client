/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        mont : ['Montserrat', 'sans-serif'],
        pop : ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'hero-bg' : "url('/src/assets/images/bg/main-bg.jpg')",
        'exp-bg' : "url('/src/assets/images/bg/Services-bg.png')",
        'footer-bg' : "url('/src/assets/images/bg/footer-bg.jpg')",
        'blog-bg' : "url('/src/assets/images/bg/blog-bg.jpg')",
        'testi-bg' : "url('/src/assets/images/bg/Testimonial-1.jpg')",
        'ts1' : "url('/src/assets/images/testimonials/ts1.jpg')",
        'ts2' : "url('/src/assets/images/testimonials/ts2.jpg')",
        'ts3' : "url('/src/assets/images/testimonials/ts3.jpg')",
        'ts4' : "url('/src/assets/images/testimonials/ts4.jpg')",
        'con-img' : "url('/src/assets/images/contact/contact.svg')",
      }
    },
  },
  plugins: [],
}