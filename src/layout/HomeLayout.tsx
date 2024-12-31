// import React from 'react'

import { Outlet } from "react-router-dom"
import { Footer, Header, ScrollToTop } from "../components"

const HomeLayout = () => {
  return (
    <div>
      <ScrollToTop />
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default HomeLayout