// import React from 'react'

import contact from "../../assets/images/contact/contact.svg";

const Contact = () => {
  return (
    <div className="w-full min-h-[100vh] flex justify-center items-center bg-hero-bg bg-cover bg-center py-[30px]">
      <div className="w-[90%] flex flex-col md:flex-row md:justify-between justify-center items-cente mt-[110px] gap-6">

        <div className="w-full md:w-[50%] lg:w-[45%] bg-white p-1 flex justify-center items-center lg:p-3  h-[250px] md:h-[350px] lg:h-[420px] rounded-[10px]">
          <img className="" src={contact} alt="" />
        </div>

        <div className="flex flex-col gap-4 w-full  md:w-[50%] lg:w-[50%]">
          <h1 className="text-[20px] font-bold text-white text-center md:text-left">Contact Us</h1>

          <form className="w-full flex flex-col gap-3">
            <input className="w-full h-[45px] pl-4 border-white border-[1px] rounded-[7px] bg-transparent" type="text" placeholder="Name" />

            <input className="w-full h-[45px] pl-4 border-white border-[1px] rounded-[7px] bg-transparent"  type="email" placeholder="Email" />

            <textarea className="w-full h-[100px] pl-4 border-white border-[1px] rounded-[7px] bg-transparent pt-3"  placeholder="Your Content" />

            <button className="animate-pulse">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact