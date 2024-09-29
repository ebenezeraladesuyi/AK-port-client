// import React from 'react'

import { Outlet } from "react-router-dom"
import { Footer, Header } from "../components"

const ContactLayout = () => {
  return (
    <div>
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default ContactLayout