// import React from 'react'

import { motion } from "framer-motion";
import heroImage from "../../assets/images/hero/AkeenSuaraHero.png";
import Typewriter from 'typewriter-effect';
import { FaLinkedinIn } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSlack } from "react-icons/fa6";


const Hero = () => {

    // const {scrollYProgress} = useScroll();

  return (
    <motion.div 
        className="w-full min-h-[100vh] bg-[#000000] bg-hero-bg bg-cover bg-center flex justify-center items-center pb-[30px]"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
    >
        <div className="w-[90%] h-full flex flex-col md:flex-row-reverse justify-center items-center gap-5 mt-[110px] md:mt-[110px] md:justify-between">
            <div className="w-[90%] lg:w-[45%]">
                <motion.img className="w-full animate-puls" src={heroImage} alt="" 
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.8, delay: 2.0 }}
                />
            </div>

            <div className="lg:w-[50%] text-white flex flex-col items-center md:items-start gap-4">
                <motion.h1 className="text-[27px] md:text-[35px] lg:text-[55px] font-[600] text-center md:text-left"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.4, delay: 1.0 }}
                >
                    Transforming 
                    <span className='text-blue-400'>
                        <Typewriter
                            options={{ loop: true }}
                            onInit={(typewriter) => {
                            typewriter

                                .typeString("Businesses")
                                .pauseFor(1500)
                                .deleteAll()

                                .typeString("Corporations")
                                .pauseFor(1500)
                                .deleteAll()

                                .typeString("Organizations")
                                .pauseFor(1500)
                                .deleteAll()
                                .start();
                            }}
                        />
                    </span> 
                    With <span className='text-blue-400'>Creative</span> & <span className='text-blue-400'>Technical</span> Expertise
                </motion.h1>

                <motion.h2 className="text-[13px] md:text-[14px] lg:text-[18px] text-center md:text-left mt-[10px mb-[20px"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.4, delay: 1.3 }}
                >
                    The combination of creative insights, technical expertise, and the latest technologies for transformative results.
                </motion.h2>

                <motion.button className="bg-blue-400 text-white px-7 animate-pulse"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.4, delay: 1.6 }}
                >
                    Contact
                </motion.button>

                <div className="flex items-center gap-2 text-white text-[20px] lg:text-[30px] mt-[10px] ">
                    <motion.a 
                        className="text-white mr-[5px] md:mr-[10px]" href=""
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.4, delay: 1.9 }}
                    >
                        <FaLinkedinIn />
                    </motion.a> |
                    <motion.a 
                        className="text-white ml-[5px] mr-[5px] md:ml-[10px] nd:mr-[10px]" href=""
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.4, delay: 2.2 }}
                    >
                        <FaStackOverflow />
                    </motion.a> |
                    <motion.a 
                        className="text-white ml-[5px] mr-[5px] md:ml-[10px] nd:mr-[10px]" href=""
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.4, delay: 2.5 }}
                    >
                        <FaTwitter />
                    </motion.a> |
                    <motion.a 
                        className="text-white ml-[5px] mr-[5px] md:ml-[10px] nd:mr-[10px]" href=""
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.4, delay: 2.8 }}
                    >
                        <FaSlack />
                    </motion.a> 
                </div>
            </div>
        </div>
    </motion.div>
  )
}

export default Hero



// Transforming lives & businesses with creative, technical expertise

// The combination of creative insights, technical expertise, and the latest technologies for transformative results.