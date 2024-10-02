// import React from 'react'

import { NavLink } from "react-router-dom"

const Message = () => {
  return (
    <div className="w-full min-h-[40vh] flex justify-center items-center  bg-[#000000f3] text-white">
        <div className="w-[90%] flex flex-col md:flex-row justify-center md:justify-between items-center gap-4">
            <h1 className="text-[25px] md:text-[30px] text-center md:text-left font-bold md:w-[60%] lg:text-[40px]">Send Me A Message And Let's Build Something Together.</h1>

            <NavLink to="/contact">
              <button className="bg-blue-400 animate-pulse md:h-[50px] lg:w-[150px] text-white">
                Contact Me
              </button>
            </NavLink>
        </div>
    </div>
  )
}

export default Message