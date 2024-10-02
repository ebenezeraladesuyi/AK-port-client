

import { Outlet } from "react-router-dom"
import { Footer, Header } from "../components"

const ServicesLayout = () => {
  return (
    <div>
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    </div>
  )
}

export default ServicesLayout