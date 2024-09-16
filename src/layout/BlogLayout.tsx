// import React from 'react'

import { Outlet } from "react-router-dom"
import { Header } from "../components"

const BlogLayout = () => {
  return (
    <div>
        <Header />
        <Outlet />
    </div>
  )
}

export default BlogLayout