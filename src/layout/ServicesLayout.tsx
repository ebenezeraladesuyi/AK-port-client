

import { Outlet } from "react-router-dom"
import { Header } from "../components"

const ServicesLayout = () => {
  return (
    <div>
        <div>
            <Header />
            <Outlet />
        </div>
    </div>
  )
}

export default ServicesLayout