import React from 'react'

interface ExpProps {
    logo: string;
    title: string;
    details: string;
}

const ExperienceCard:React.FC<ExpProps> = ({logo, title, details}) => {
  return (
    <div className="bg-[rgb(40,40,40)] text-white w-full md:w-[45%] lf:w-[40%] h-[250px] md:h-[240px] lg:h-[280px] p-4 md:p-2 lg:p-4 py-3 rounded-md shadow-md shadow-neutral-600 flex flex-col items-center justify-center gap-3">
        <div className="w-[70px] h-[70px] md:w-[50px] md:h-[50px] lg:w-[70px] lg:h-[70px] rounded-full bg-[#373737] flex justify-center items-center">
            {/* LOGO */}
            {logo}
        </div>

        <h1 className="text-[20px] md:text-[15px] lg:text-[23px] text-600 text-center">
            {/* Software Engineering */}
            {title}
        </h1>

        <h2 className="text-[13px] md:text-[10px] text-center text-[#d8cda6] lg:text-[15px]">
            {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. */}
            {details}
        </h2>

        <button className="bg-transparent animate-pulse  border-none outline-none text-[15px] md:text-[11px] lg:text-[17px]">Learn More</button>
    </div>
  )
}

export default ExperienceCard