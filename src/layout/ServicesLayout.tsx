

import { Outlet } from "react-router-dom"
import { Footer, Header, ScrollToTop } from "../components"

const ServicesLayout = () => {
  return (
    <div>
        <div>
        <ScrollToTop />
            <Header />
            <Outlet />
            <Footer />
        </div>
    </div>
  )
}

export default ServicesLayout