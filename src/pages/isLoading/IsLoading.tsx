// import React from 'react'

import { ThreeDots } from "react-loader-spinner";
// import logo from "../../assets/images/logo/AkeenSuaraLogo.png";

const IsLoading = () => {

  return (
    <div style={{width:"100%", height:"100vh", display:"flex", backgroundColor:"", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>

        {/* <i style={{fontSize:"15px", color:"#0a4757", marginBottom:"40px"}}>SWYS</i> */}

        {/* <img src={logo} className="w-[100px] mb-[20px] bg-whit" alt="Logo" /> */}

        <ThreeDots
            visible={true}
            height="80"
            width="80"
            color="#23a1db"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
            />

        <i style={{fontSize:"17px", color:"#23a1db", marginTop:"30px"}}>Loading...</i>

    </div>
  )
}

export default IsLoading