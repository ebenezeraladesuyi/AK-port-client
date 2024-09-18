// import React from 'react'

import { ExperienceCard } from "../../components"

const Experience = () => {
  return (
    <div className="w-full min-h-[100vh] bg-exp-bg bg-cover bg-center flex justify-center items-center py-[30px]">
        <div className="w-[90%] flex flex-col md:flex-row justify-center md:justify-between items-center gap-6">

            <div className="bg-[#2e2c1f] h-[300px] md:h-[270px] lg:h-[350px] w-full md:w-[35%] lg:w-[25%] text-white flex flex-col justify-center md:justify-start items-center gap-5 relative md:p-4">
                <h1 className="text-[20px] md:text-[18px] lg:text-[25px] text-center md:pt-[10px] lg:mt-0">
                    over <br/><span className="text-[65px] md:text-[55px] lg:text-[90px] font-[600] text-blue-400">05</span><br /> Years of Experience
                </h1>

                <div className="w-[80%] md:w-[70%] border-t-[1px] border-l-[1px] border-r-[1px] border-white rounded-md p-2 text-center md:absolute md:right-[-30px] lg:right-[-100px] md:bottom-[40px] lg:bottom-[50px] bg-[#2e2c1f]">
                    <h2 className="text-[17px]"><span className="text-[35px] md:text-[25px] lg:text-[35px] font-600 text-blue-400">100% </span><br />Professionalism</h2>
                </div>
            </div>

            <div className="w-full md:w-[55%] lg:w-[60%] text-white">
                <h3 className="text-[25px] lg:text-[35px] font-600 text-center md:text-left mb-[20px]">Popular Services</h3>

                <div className="w-full flex flex-col md:flex-row items-center justify-center flex-wrap gap-4">
                    <ExperienceCard 
                        logo="LOGO"
                        title="Software Engineering"
                        details="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
                    />
                    
                    <ExperienceCard 
                        logo="LOGO"
                        title="Mentorship"
                        details="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
                    />
                    
                    <ExperienceCard 
                        logo="LOGO"
                        title="Software Engineering"
                        details="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience