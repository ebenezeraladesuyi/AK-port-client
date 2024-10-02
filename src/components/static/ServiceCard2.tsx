import React from 'react'

// import software from "../../assets/images/services/software.png";

interface serviceCard {
    icon : any;
    title: string;
    details: string;
}

const ServicesCard2:React.FC<serviceCard> = ({icon, title, details}) => {
  return (
    <div className="w-full flex flex-col md:flex-row-reverse  items-center justify-between md:items-start gap-6">
        <div className="w-full md:w-[40%] lg:w-[30%] h-[250px] bg-[#eceaea] border-[#000] border-[1px rounded-[7px] flex justify-center items-center p-2">
            <img src={icon} className="w-full" alt="" />
        </div>

        <div className="flex flex-col gap-2 md:w-[55%] lg:w-[65%]">
            <h1 className="text-white rounded-[5px] font-bold text-[18px] md:text-[21px] lg:text-[26px] p-2 p bg-[#000]">
                {/* SOFTWARE ENGINEERING */}
                {title}
            </h1>

            <p className="text-[13px] md:text-[15px] lg:text-[18px] font-bold text-justify text-[#00000097]">
                {/* As a dedicated software engineer, I am passionate about creating reliable, scalable, and innovative software solutions that address real-world challenges. With expertise in various programming languages, frameworks, and modern technologies, I strive to build high-performance applications that deliver both functionality and user satisfaction. My work focuses on clean, maintainable code, user-centric design, and a commitment to delivering software that not only meets client expectations but also contributes to their overall business goals. Whether it’s front-end development, back-end architecture, or full-stack solutions, I take pride in crafting software that drives efficiency and fosters growth. */}
                {details}
            </p>
        </div>
    </div>
  )
}

export default ServicesCard2