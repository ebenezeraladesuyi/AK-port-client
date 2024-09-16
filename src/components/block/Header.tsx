import React from 'react'
import logo from "../../assets/images/logo/AkeenSuaraLogo-white.png";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import { motion } from "framer-motion";
// import { Link } from "react-scroll";

const Header = () => {

    const [dropdown, setDropdown] = React.useState(false)

    const showDropdown = () => {
        setDropdown(!dropdown)
    }

  return (
    <motion.div className={`w-full h-[80px] lg:h-[130px flex lg:justify-center items-center shadow-m font-pop fixed z-40 bg-[#000000] text-white  lg:shadow-md `}
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.7 }}
    >
        <div className="w-[90%] h-full flex flex-co justify-between items-center  ml-[20px] lg:ml-0">

            {/* <div className='hidden w-[100%] h-full lg:flex justify-between items-center'>

                <div className='p-2 rounded-md bg-white shadow-md w-[50px] md:[70px] z-40'>
                    <img className="w-full " src={logo} alt="W2H-logo" />
                </div>

            </div> */}

            {/* <div className='flex justify-between items-center w-full'> */}
            <NavLink to='/'>
                <div className='lg:hidde p-1 rounded-md shadow-m w-[70px] md:w-[80px] z-40 h- py-0'>
                    <img className="w-full  " src={logo} alt="Akeem-Suara" />
                    {/* <h5 className='text-black font-bold'>GAC</h5> */}
                </div>
            </NavLink>

            {/* <div className='hidden lg:flex p-2 px-6 rounded-md bg-white shadow-md text-[20px] text-black gap-6'>
                <a className='decoration- cursor-pointer text-black '><FaSquareFacebook /></a>
                <a className='decoration-non cursor-pointer text-black '><FaTwitterSquare /></a>
                <a className='decoration-non cursor-pointer text-black '><FaLinkedin /></a>
                <a className='decoration-non cursor-pointer text-black '><FaSquareInstagram /></a>
            </div> */}

            <div className='lg:bg-whit lg:bg-opacity-4 rounded-[30px] lg:shadow-m p-3'>
                <li className="hidden lg:flex items-center gap-5 text-[15px] transition-all duration-500 ease-in-out text-white ">
                    <NavLink 
                        to="/"
                        className={({isActive}) => `text-[#fff] hover:text-[#23a1db] cursor-pointer font-semibold transition-all duration-300 ease-in-out ${isActive ? 'text-blue-400' : ''}`}
                    >
                        <ol>Home</ol>
                    </NavLink>
                    
                    <NavLink 
                        to="/services"
                        className={({isActive}) => `text-[#fff] hover:text-[#23a1db] cursor-pointer font-semibold transition-all duration-300 ease-in-out ${isActive ? 'text-blue-400' : ''}`}
                    >
                        <ol>Services</ol>
                    </NavLink>

                    {/* <Link offset={-100} smooth={true} duration={500} to="services"> */}
                    <NavLink 
                        to='/blog'
                        className={({isActive}) => `text-[#fff] hover:text-[#23a1db] cursor-pointer font-semibold transition-all duration-300 ease-in-out ${isActive ? 'text-blue-400' : ''}`}
                    >
                        <ol>Blog</ol>
                    </NavLink>

                    <NavLink 
                        to='/about'
                        className={({isActive}) => `text-[#fff] hover:text-[#23a1db] cursor-pointer font-semibold transition-all duration-300 ease-in-out ${isActive ? 'text-blue-400' : ''}`}
                    >
                        <ol>About</ol>
                    </NavLink>

                    {/* <Link offset={-100} smooth={true} duration={500} to="contact"> */}
                    {/* <NavLink to='/'>
                        <ol className='text-[#fff] hover:text-[#23a1db] cursor-pointer font-semibold transition-all duration-300 ease-in-out'>Contact</ol>
                    </NavLink> */}

                    <NavLink 
                        to="/contact"
                        className={({isActive}) => ` px-8 py-2 bg-[#23a1db] border-none hover:bg-[#063e60] hover:text-white  text-white font-semibold animate-puls ml-[50px] rounded-[60px] transition-all duration-300 ease-in-out ${isActive ? 'bg-blue-900' : ''}`}
                    >
                        <div className=''>
                            Contact
                        </div>
                    </NavLink>
                </li>

                

            { dropdown ?
                // <div className="lg:hidden text-[22px] cursor-pointer  ml-[6px] shadow-md text-[#23a1db] relative z-50 p-1 rounded-md bg-white" onClick={showDropdown}>
                //     <MdClose /> 
                // </div>
                null
            :
                <div className="lg:hidden text-[22px] cursor-pointer text-[#23a1db] shadow-md bg-white p-1 rounded-md ml-[6px] relative z-50" onClick={showDropdown}>
                    <HiMenuAlt3 /> 
                </div>
            }

            </div>
            {/* </div> */}

        </div>

        {/* {
            dropdown ? */}

            <div className={` ${dropdown ? 'transform translate-y-0' : 'transform -translate-x-full'} lg:hidden w-[80%] h-[100vh] absolute bg-whit backdrop-blur-m bg-[#000000] bg-opacity-6 top-0 transition-all ease-in-out z-30 duration-300relative`} onClick={showDropdown}>

                <div className="lg:hidden text-[22px] cursor-pointer  ml-[6px] shadow-md text-[#23a1db]  z-50 p-1 rounded-md bg-white absolute right-[15px] top-[25px]" onClick={showDropdown}>
                    <MdClose /> 
                </div>

                <div className="w-full h-[320px]  flex flex-col pl-[15px] sm:pl-[35px] pt-[25px] text-[13px] gap-4 text-[#1f2035] top-[70px] absolute ">
                    {/* <li className="lg:flex items-center gap-5 text-[16px]"> */}
                        <NavLink 
                            to="/"
                            className={({isActive}) => ` text-white hover:text-[#eedfb0] cursor-pointer font-semibold transition-all duration-300 ease-in-out ${isActive ? 'text-blue-400' : ''}`}
                        >
                            <ol className=''>Home</ol>
                        </NavLink>

                        <NavLink 
                            to="/services"
                            className={({isActive}) => ` text-white hover:text-[#eedfb0] cursor-pointer font-semibold transition-all duration-300 ease-in-out ${isActive ? 'text-blue-400' : ''}`}
                        >
                            <ol>Services</ol>
                        </NavLink>

                        {/* <Link  offset={-100} smooth={true} duration={500} to="services"> */}
                        <NavLink 
                            to='/blog'
                            className={({isActive}) => ` text-white hover:text-[#eedfb0] cursor-pointer font-semibold transition-all duration-300 ease-in-out ${isActive ? 'text-blue-400' : ''}`}
                        >
                            <ol>Blog</ol>
                        </NavLink>

                        <NavLink 
                            to='/about'
                            className={({isActive}) => ` text-white hover:text-[#eedfb0] cursor-pointer font-semibold transition-all duration-300 ease-in-out ${isActive ? 'text-blue-400' : ''}`}
                        >
                            <ol>About</ol>
                        </NavLink>

                        {/* <Link offset={-100} smooth={true} duration={500} to="contact"> */}
                        {/* <NavLink to='/contact'>
                            <ol className='text-white  hover:text-[#eedfb0s] cursor-pointer font-semibold transition-all duration-300 ease-in-out'>Contact</ol>
                        </NavLink> */}

                        <NavLink 
                            to="/contact"
                            className={({isActive}) => ` w-[110px] h-[35px] flex justify-center items-center bg-[#80c41c] border-none hover:bg-[#3d82b3] text-white font-semibold animate-pulse  rounded-[60px] ${isActive ? 'bg-blue-400' : ''}`}
                        >
                            <div className='text-white'>
                                Contact
                            </div>
                        </NavLink>
                    {/* </li> */}
                </div>
            </div>

            {/* :
                null
        } */}

                    {/* <div className="flex items-center mt-[12px] animate-pulse text-[var(--accent)]">
                      <motion.button
                        animate={{ x: 10 }}
                        transition={{ ease: "easeOut", duration: 2 }}
                        className="w-[150px] h-[45px]  rounded-md text-[20px]  border border-[#12C5E4]  dark:text-[#12C5E4]"
                      >
                        Contact Me
                      </motion.button>
                    </div> */}
    </motion.div>
  )
}

export default Header;

// #80c41c
// #3d82b3