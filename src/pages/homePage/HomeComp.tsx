// import React from 'react'

import BlogHome from "./Blog"
import Experience from "./Experience"
import Hero from "./Hero"
import Message from "./Message"
import NewsLetter from "./NewsLetter"
import Testimonials from "./Testimonials"

const HomeComp = () => {
  return (
    <div className="font-pop">
      <Hero />
      <Experience />
      <Message />
      <BlogHome />
      <Testimonials />
      <NewsLetter />
    </div>
  )
}

export default HomeComp